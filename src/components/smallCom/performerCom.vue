<template>
    <div :class="Class_C" v-if="props.mode == 'simple'">
        <span :class="WorksCls">{{ props.workNum }}</span>
        <performerComSubA :performerInfo="props.performerInfo" @showPerRes="showPerRes"></performerComSubA>
    </div>
    <div :class="Class_C" v-else-if="props.mode == 'brief'">
        <performerComSubA mode="brief" :performerInfo="props.performerInfo" @showPerRes="showPerRes"></performerComSubA>
    </div>
    <div v-else :class="Class_C">
        <el-popover placement="left" width="380" trigger="click">
            <div v-if="props.performerInfo">
                <performerComSubB :performerInfo="props.performerInfo" :shootingDate="shootingDate"
                    :performer="props.performer"></performerComSubB>
            </div>
            <template #reference>
                <performerComSubA :performerInfo="props.performerInfo" @showPerRes="showPerRes"></performerComSubA>
            </template>
        </el-popover>
    </div>
</template>
<script setup lang="ts">
import { Iperformer } from "@/dataInterface/performer.interface";
import performerComSubA from "./performerComSubA.vue"
import performerComSubB from "./performerComSubB.vue"
import { computed } from "vue";
// eslint-disable-next-line no-undef
const props = defineProps({
    performerInfo: {
        type: Object as () => Iperformer
    },
    shootingDate: {
        type: String,
        default: undefined,
    },
    mode: {
        type: String,
        default: 'simple',//['simple','popover','brief']
    },
    select: {
        type: Boolean,
        default: false
    },
    performer: {
        type: Boolean,
        default: true
    },
    workNum: {
        type: Number,
        default: 0
    }
});
// eslint-disable-next-line no-undef
const emits = defineEmits(['showPerRes']);

const showPerRes = () => {
    emits('showPerRes', props.performerInfo);
}

const Class_C = computed(() => {
    return ['performerCom', props.select !== false ? 'select' : 'noSelect', props.performerInfo?.retreatStatus ? 'retreat' : ''];
})

const WorksCls = computed(() => {
    return ['worksCls', props.performer ? 'perWorksCls' : 'dirWorksCls']
})

const getNum = function () {
    const dataList = props.performer ? props.performerInfo?.perResources : props.performerInfo?.dirResources
    return dataList ? dataList.length : 0
}

</script>
<style scoped>
.worksCls {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    font-size: 8px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.perWorksCls {
    background-color: red;
}

.dirWorksCls {
    background-color: rgb(7, 121, 170);
}

.performerCom {
    width: 71px;
    height: auto;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
}

.noSelect {
    background-color: #FCECAE;
}

.select {
    color: #FFFFFF;
    background-color: #FFAA47;
}

.retreat {
    filter: grayscale(70%);
}
</style>