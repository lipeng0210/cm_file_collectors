<template>
    <div class="tagPerformer">
        <tagHeaderVue :title="store.filesBasesSettingStore.getPerformerText" @updataCondition="updataCondition"
            @updateDeployableState="updateDeployableState" :conditionItem="props.conditionItem">
        </tagHeaderVue>
        <div v-if="tagDeployableState">
            <div class="tagList">
                <tagSpan :text="$t('tag.all')" @click="selectHandle('all' as never)" :select="selectBaseStatus('all')">
                </tagSpan>
                <tagSpan :text="$t('tag.noPerformer', { performer: store.filesBasesSettingStore.getPerformerText })"
                    @click="selectHandle('noPerformer' as never)" :select="selectBaseStatus('noPerformer')"></tagSpan>
                <tagSpan :text="$t('tag.directorBase')" @click="selectHandle('director' as never)"
                    :select="selectBaseStatus('director')"></tagSpan>
                <tagSpan v-for="base, key in store.performerBasesStore.getPerformerBasesListByCurrentFilesBases" :key="key"
                    :text="base.name" @click="selectHandle(base.id as never)" :select="selectBaseStatus(base.id)"></tagSpan>
            </div>
            <div class="performerList" v-if="store.filesBasesSettingStore.config.performerPhoto">
                <performerCom v-for="item, key in getDataList()" :key="key" :performerInfo="item"
                    @click="selectPerformerHandle(item.id as never)" :select="selectStatus(item.id)"></performerCom>
            </div>
            <div class="performerList" v-else>
                <tagSpan v-for="item, key in getDataList()" :key="key" :text="item.name"
                    @click="selectPerformerHandle(item.id as never)" :select="selectStatus(item.id)"></tagSpan>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import tagHeaderVue from "./tagHeader.vue"
import tagSpan from "@/components/smallCom/tagSpan.vue"
import performerCom from "@/components/smallCom/performerCom.vue"
import { performerStore } from "@/store/performer.store";
import { performerBasesStore } from "@/store/performerBases.store";
import { filesBasesSettingStore } from "@/store/filesBasesSetting.store";
import { Iperformer } from "@/dataInterface/performer.interface";
import { EsearchLogic } from "@/dataInterface/common.enum";
import { ref } from "vue";
// eslint-disable-next-line no-undef
const props = defineProps({
    conditionItem: {
        type: Array,
        default: () => {
            return [EsearchLogic.single, EsearchLogic.or, EsearchLogic.and, EsearchLogic.not];
        }
    }
})
// eslint-disable-next-line no-undef
const emits = defineEmits(['updateData']);

const store = {
    performerStore: performerStore(),
    performerBasesStore: performerBasesStore(),
    filesBasesSettingStore: filesBasesSettingStore(),
}
const tagPerformerBase = ref('all')
const selectValArr = ref([]);
const showValArr = ref([]);
const searchLogic = ref(EsearchLogic.single);
const tagDeployableState = ref(true);

const isAllOrNoTag = ref(true)
const isDirectorTag = ref(false)
const isPerformerTag = ref(false)

const getDataList = () => {
    const performerArr: Array<Iperformer> = [];
    store.filesBasesSettingStore.config.performerPreferred.forEach((perId: string) => {
        const perInfo = store.performerStore.getPerformerInfoById(perId);
        if (perInfo && performerArr.length < store.filesBasesSettingStore.config.performerShowNum) {
            if (isPerformerTag.value) {
                if (tagPerformerBase.value == perInfo.performerBases_id && perInfo.careerPerformer) {
                    performerArr.push(perInfo)
                }
            } else if (isDirectorTag.value) {
                if (perInfo.careerDirector) {
                    performerArr.push(perInfo)
                }
            } else {
                if (perInfo.careerPerformer) {
                    performerArr.push(perInfo)
                }
            }
        }
    });
    let lack = store.filesBasesSettingStore.config.performerShowNum - performerArr.length;
    if (lack > 0) {
        for (let i = 0; i < store.performerStore.getPerformerListByFilesBasesId.length; i++) {
            if (store.filesBasesSettingStore.config.shieldNoPerformerPhoto && store.performerStore.getPerformerListByFilesBasesId[i].photo == '') {
                continue;
            }
            if (lack > 0 && !performerArr.some(obj => obj.id == store.performerStore.getPerformerListByFilesBasesId[i].id)) {
                let per = store.performerStore.getPerformerListByFilesBasesId[i]
                if (isPerformerTag.value) {
                    if (tagPerformerBase.value == per.performerBases_id && per.careerPerformer) {
                        lack--;
                        performerArr.push(per)
                    }
                } else if (isDirectorTag.value) {
                    if (per.careerDirector) {
                        lack--;
                        performerArr.push(per)
                    }
                } else {
                    if (per.careerPerformer) {
                        lack--;
                        performerArr.push(per)
                    }
                }
            }
            if (lack <= 0) {
                break;
            }
        }
    }
    return performerArr;
}

const updateData = () => {
    isAllOrNoTag.value = tagPerformerBase.value == 'all' || tagPerformerBase.value == 'noPerformer'
    isDirectorTag.value = tagPerformerBase.value == 'director'
    isPerformerTag.value = !(isAllOrNoTag.value || isDirectorTag.value)
    emits('updateData', isDirectorTag.value ? 'director' : 'performer', searchLogic.value, selectValArr.value, showValArr.value)
}


const updataCondition = (searchLogicValue: EsearchLogic) => {
    if (searchLogicValue == EsearchLogic.single && searchLogic.value != EsearchLogic.single) {
        selectValArr.value = [];
    }
    searchLogic.value = searchLogicValue;
    updateData();
}
const updateDeployableState = (deployableState: boolean) => {
    tagDeployableState.value = deployableState;
}

const selectHandle = (val: never) => {
    selectValArr.value = []
    showValArr.value = []
    tagPerformerBase.value = val
    if (val == 'all') {
        selectValArr.value = []
    } else if (val == 'noPerformer') {
        selectValArr.value = [];
    } else if (val == 'director') {
        //     store.performerStore.getPerformerListyPerformerBasesId(val).forEach((per) => {
        store.performerStore.getPerformerListByFilesBasesId.forEach((per) => {
            if (per.careerDirector) {
                selectValArr.value.push(per.id as never)
            }
        })
    } else {
        store.performerStore.getPerformerListyPerformerBasesId(val).forEach((per) => {
            if (per.careerPerformer) {
                selectValArr.value.push(per.id as never)
            }
        })
    }

    const searchLogicTmp = searchLogic.value
    searchLogic.value = EsearchLogic.or
    updateData();
    searchLogic.value = searchLogicTmp
    selectValArr.value = []
}

const selectPerformerHandle = (val: never) => {
    if (isAllOrNoTag.value) {
        tagPerformerBase.value = 'all'
    }
    const index = selectValArr.value.findIndex(item => item == val)
    if (index > -1) {
        selectValArr.value.splice(index, 1);
    } else {
        if (searchLogic.value == EsearchLogic.single) {
            selectValArr.value = [val];
        } else {
            selectValArr.value.push(val);
        }
    }
    showValArr.value = selectValArr.value
    updateData();
}

const selectStatus = (val: string) => {
    return showValArr.value.indexOf(val as never) > -1
}

const selectBaseStatus = (val: string) => {
    return val === tagPerformerBase.value
}

</script>
<style scoped>
.tagList {
    display: flex;
    overflow-x: auto;
    margin-bottom: 5px;
}

.performerList {
    display: flex;
    flex-wrap: wrap;
    padding-left: 2px;
}

.performerList .performerCom {
    margin: 0px 3px 3px 0px;
}
</style>