<template>
    <div class="footer">
        <div class="pagination">
            <el-pagination layout="total,prev, pager, next,jumper" :total="props.dataCount"
                v-model:current-page="currentPage" v-model:page-size="pageSize" :small="true"
                @current-change="currentChange" />
        </div>
        <div class="settingsEtc">
            <div class="sItem">
                <el-checkbox v-model="streamingServerStatus" :label="$t('server.videoStreamingServer')" size="large"
                    @change="changeVideoStreamingServer" />
            </div>
            <div class="sItem selectDatabase">
                <el-select v-model="currentFilesBases" @change="changeFilesBases">
                    <el-option v-for="item, key in  store.filesBasesStore.filesBasesList.filter(item => item.status) "
                        :key="key" :label="item.name" :value="item.id" />
                </el-select>
            </div>
            <div class="sItem btnI" @click="openDatabasesAdmin">
                <el-icon :size="24">
                    <Coin />
                </el-icon>
            </div>
            <div class="sItem btnI" @click="openSystem">
                <el-icon :size="24">
                    <Setting />
                </el-icon>
            </div>
        </div>
    </div>
    <systemDialog ref="systemDialogRef"></systemDialog>
    <filesDatabasesAdminDialog ref="filesDatabasesAdminDialogRef"></filesDatabasesAdminDialog>
    <el-dialog v-model="alertDialog" width="30%" :before-close="backFileBase" :close-on-click-modal="false">
        <el-form-item :label="$t('settings.basicSettings.password.inputPassword')">
            <el-input style="width:200px" v-model="passwordInput" show-password />
        </el-form-item>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="backFileBase">{{ $t('settings.basicSettings.password.cancel') }}</el-button>
                <el-button type="primary" @click="confirmBtn">{{ $t('settings.basicSettings.password.confirm') }}</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
import { softWareConfigData } from '@/setup/softwareConfig';
import { ElMessage } from 'element-plus'
import filesDatabasesAdminDialog from '@/components/filesDatabasesAdmin/filesDatabasesAdminDialog.vue';
import systemDialog from '@/components/system/systemDialog.vue';
import { EresUpdate } from '@/dataInterface/common.enum';
import { filesBasesStore } from "@/store/filesBases.store";
import { filesBasesSettingStore } from "@/store/filesBasesSetting.store";

import { createServer, closeServer } from '@/webServer/index.webServer';
import { ref, inject, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();


const AppInitInject = inject<(_filesBases_id: string, _callBack: () => void) => void>('AppInit');
const indexUpdateResourcesDataInject = inject<(_up: Array<EresUpdate>) => void>('indexUpdateResourcesData');

// eslint-disable-next-line no-undef
const props = defineProps({
    dataCount: {
        type: Number,
        default: 50,
    },
    dataLimit: {
        type: Number,
        default: 32,
    },
});
// eslint-disable-next-line no-undef
const emits = defineEmits(['currentChange', 'setShowDatasFlag']);
const store = {
    filesBasesStore: filesBasesStore(),
    filesBasesSettingStore: filesBasesSettingStore()
}
const currentPage = ref(1);
const pageSize = ref(props.dataLimit);
const streamingServerStatus = ref(false);
const filesDatabasesAdminDialogRef = ref<InstanceType<typeof filesDatabasesAdminDialog>>();
const systemDialogRef = ref<InstanceType<typeof systemDialog>>();
const currentFilesBases = ref(store.filesBasesStore.currentFilesBases.id);

const preCurrentFilesBases = ref('');
const passwordInput = ref('')
const alertDialog = ref(store.filesBasesSettingStore.config.openFileBasePassword)

watch(() => props.dataLimit, (newValue) => pageSize.value = newValue);
watch(() => store.filesBasesStore.currentFilesBases.id, (newValue, oldValue) => {
    preCurrentFilesBases.value = oldValue
    currentFilesBases.value = newValue
});

const currentChange = () => {
    emits('currentChange', currentPage.value);
}
const setShowDatasFlag = (flag: boolean) => {
    emits('setShowDatasFlag', flag);
}

const changeFilesBases = async () => {
    setShowDatasFlag(false)
    await appInit(currentFilesBases.value)
    alertDialog.value = store.filesBasesSettingStore.config.openFileBasePassword
    setShowDatasFlag(!alertDialog.value)
}

const appInit = async (filesBases_id: string) => {
    if (AppInitInject) await AppInitInject(filesBases_id, async () => {
        if (indexUpdateResourcesDataInject) indexUpdateResourcesDataInject([EresUpdate.updateData, EresUpdate.updataDetailsViewByUpdateDataFirstRecord]);
    });
}

const backFileBase = async () => {
    alertDialog.value = false
    await appInit(preCurrentFilesBases.value)
    passwordInput.value = ''

    if (store.filesBasesSettingStore.config.openFileBasePassword) {
        alertDialog.value = true
        setShowDatasFlag(false)
    } else {
        setShowDatasFlag(true)
    }
}
const confirmBtn = async () => {
    const flag = passwordInput.value == store.filesBasesSettingStore.config.fileBasePassword
    if (flag) {
        alertDialog.value = false
        setShowDatasFlag(true)
        await appInit(currentFilesBases.value)
        passwordInput.value = ''
    } else {
        ElMessage({
            showClose: true,
            message: t('settings.basicSettings.password.message.inputError'),
            type: 'error',
            duration: 3000,
        })
        passwordInput.value = ''
    }
}

const openSystem = () => {
    systemDialogRef.value?.open();
}
const openDatabasesAdmin = () => {
    filesDatabasesAdminDialogRef.value?.open();
}


const changeVideoStreamingServer = async (v: boolean) => {
    if (v) {
        const { status, ip, port } = await createServer();
        ElMessage({
            showClose: true,
            message: t('server.message.' + (status ? 'createSuccess' : 'createError'), { ip, port }),
            type: status ? 'success' : 'error',
            duration: 0,
        })

    } else {
        const { ip, port } = closeServer();
        ElMessage({
            showClose: true,
            message: t('server.message.close', { ip, port }),
            type: 'warning',
            duration: 0,
        })
    }
}

onMounted(() => {
    if (softWareConfigData.autoOpenServer as boolean) {
        streamingServerStatus.value = true;
        changeVideoStreamingServer(true);
    }
})

</script>
<style scoped>
.footer {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #606266;
    background-color: #f2f2f5;
    display: flex;
    justify-content: space-between;
}

.pagination {
    padding: 5px 0px 0px 10px;
}

.settingsEtc {
    display: flex;
}

.settingsEtc .sItem {
    padding-right: 5px;
}

.settingsEtc .selectDatabase {
    width: 200px;
    padding-top: 2px;
}

.settingsEtc .btnI {
    padding-top: 5px;
    cursor: pointer;
}

.settingsEtc .btnI:hover {
    color: #5CB6FF;
}
</style>