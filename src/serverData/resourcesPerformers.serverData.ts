import { CoreDb } from "@/core/core";
import { IConditions, coreDBS } from "@/core/coreDBS";
import { IresPerformers, IresFileBasePerformer } from "@/dataInterface/resources.interface";
const resourcesPerformersServerData = {
    getResourcesPerformersByFilebaseAndPerformer: async function () {
        return await CoreDb().table('resourcesPerformers').fields(['t.resources_id', 'r.filesBases_id', 't.performer_id'])
            .leftJoin('resources as r', 't.resources_id = r.id')
            .leftJoin('filesBases as fb', 'r.filesBases_id = fb.id')
            .leftJoin('performer as p', 't.performer_id = p.id ').noWhere()
            .getList() as Array<IresFileBasePerformer>;
    },
    getDataListByResources_id: async function (resources_id: string) {
        return await CoreDb().table('resourcesPerformers').where('resources_id', '=', resources_id).order('sort', 'asc').getList() as Array<IresPerformers>;
    },
    setResourcesPerformers: async function (resources_id: string, PerformersArr: Array<IresPerformers>) {
        const tID = await CoreDb().beginTrans();
        const delStatus = await this.deletePerformersByResourcesId(resources_id);
        if (!delStatus) {
            await CoreDb().rollback();
            return false;
        }
        for (let i = 0; i < PerformersArr.length; i++) {
            const addStatus = await this.addPerformers(PerformersArr[i], i);
            if (!addStatus) {
                await CoreDb().rollback();
                return false;
            }
        }
        await CoreDb().commit(tID);
        return true;
    },
    addPerformers: async function (obj: IresPerformers, sort = 0) {
        const insterObj: IConditions = { ...obj, sort }
        const addResult = await CoreDb().table('resourcesPerformers').create(insterObj);
        return (addResult && addResult.status == true)
    },
    deletePerformersByResourcesId: async function (resources_id: string, _dbs: coreDBS | undefined = undefined) {
        const dbs = _dbs == undefined ? CoreDb() : _dbs;
        const delResult = await dbs.table('resourcesPerformers').where('resources_id', '=', resources_id).deleteWhere();
        return (delResult && delResult.status == true) ? true : false;
    },
}
export { resourcesPerformersServerData }