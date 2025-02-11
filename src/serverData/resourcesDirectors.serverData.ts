import { CoreDb } from "@/core/core";
import { IConditions, coreDBS } from "@/core/coreDBS";
import { IresDirectors, IresFileBasePerformer } from "@/dataInterface/resources.interface";
const resourcesDirectorsServerData = {
    getResourcesPerformersByFilebaseAndPerformer: async function () {
        return await CoreDb().table('resourcesDirectors').fields(['t.resources_id', 'r.filesBases_id', 't.performer_id'])
            .leftJoin('resources as r', 't.resources_id = r.id')
            .leftJoin('filesBases as fb', 'r.filesBases_id = fb.id')
            .leftJoin('performer as p', 't.performer_id = p.id ').noWhere()
            .getList() as Array<IresFileBasePerformer>;
    },
    getDataListByResources_id: async function (resources_id: string) {
        return await CoreDb().table('resourcesDirectors').where('resources_id', '=', resources_id).order('sort', 'asc').getList() as Array<IresDirectors>;
    },
    setResourcesDirectors: async function (resources_id: string, directorsArr: Array<IresDirectors>) {
        const tID = await CoreDb().beginTrans();
        const delStatus = await this.deleteDirectorsByResourcesId(resources_id);
        if (!delStatus) {
            await CoreDb().rollback();
            return false;
        }
        for (let i = 0; i < directorsArr.length; i++) {
            const addStatus = await this.addDirectors(directorsArr[i], i);
            if (!addStatus) {
                await CoreDb().rollback();
                return false;
            }
        }
        await CoreDb().commit(tID);
        return true;
    },
    addDirectors: async function (obj: IresDirectors, sort = 0) {
        const insterObj: IConditions = { ...obj, sort }
        const addResult = await CoreDb().table('resourcesDirectors').create(insterObj);
        return (addResult && addResult.status == true)
    },
    deleteDirectorsByResourcesId: async function (resources_id: string, _dbs: coreDBS | undefined = undefined) {
        const dbs = _dbs == undefined ? CoreDb() : _dbs;
        const delResult = await dbs.table('resourcesDirectors').where('resources_id', '=', resources_id).deleteWhere();
        return (delResult && delResult.status == true) ? true : false;
    },
}
export { resourcesDirectorsServerData }