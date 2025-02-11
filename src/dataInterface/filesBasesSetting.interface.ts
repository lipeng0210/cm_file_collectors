interface IfilesBasesSetting {
    filesBases_id: string;
    config_json_data: string;
    nfo_json_data: string;
    simple_json_data: string;
}

interface IcoverPosterData {
    name: string;
    width: number;
    height: number;
    type: string;
}

interface IrouteConversion {
    from: string;
    to: string;
}

interface IfilesBasesConfig {
    leftDisplay: Array<string>;
    leftColumnWidth: number;
    leftColumnMode: string;
    country: Array<string>;
    definition: Array<string>;
    tagMode: string;
    performerPhoto: boolean;
    shieldNoPerformerPhoto: boolean;
    openFileBasePassword: boolean;
    fileBasePassword: string,
    performerShowNum: number;
    performerPreferred: Array<string>;
    pageLimit: number;
    sortMode: string;
    resourcesShowMode: string;
    detailsDramaSeriesMode: string;
    historyModule: boolean;
    hotModule: boolean;
    youLikeModule: boolean;
    historyNumber: number;
    hotNumber: number;
    youLikeNumber: number;
    youLikeWordNumber: number;
    youLikeTagClass: Array<string>;
    resourceDetailsShowMode: string;
    showPreviewImage: boolean;
    previewImageFolder: string;
    plugInUnit_Cup: boolean;
    plugInUnit_Cup_Text: string;
    coverPosterData: Array<IcoverPosterData>;
    coverPosterDataDefaultSelect: number;
    coverPosterWidthStatus: boolean;
    coverPosterHeightStatus: boolean;
    coverPosterWidthBase: number;
    coverPosterHeightBase: number;
    playAtlasImageWidth: number;
    playAtlasMode: string;
    playAtlasPageLimit: number;
    playAtlasThumbnail: boolean;
    playComicMode: string;
    playComicrReadingMode: boolean;
    routeConversion: Array<IrouteConversion>;
    definitionRgba: string;
    definitionFontColor: string;
    coverDisplayTag: Array<string>;
    coverDisplayTagRgba: string;
    coverDisplayTagColor: string;
    randomPosterStatus: boolean;
    randomPosterPath: string;
    randomPosterAutoSize: boolean;
    randomPosterWidth: number;
    randomPosterHeight: number;
    performer_Text: string;
    director_Text: string;
    performer_photo: string;
}

interface IfilesBasesNofConfig {
    autoConverSeries: boolean,
    importCheckTitleAlready: boolean,
    coverPosterUsesPreSetDimensions: boolean,
    suffix: string,
    root: string,
    title: string,
    issueNumber: string,
    year: string,
    cover: string,
    coverSuffix: string,
    coverUrl: string,
    tag: string,
    removedTag: string,
    abstract: string,
    country: string,
    star: string,
    performer: string,
    performerName: string,
    performerThumb: string,
}

interface IfilesBasesSimpleConfig {
    importCheckTitleAlready: boolean,
    coverPosterUsesPreSetDimensions: boolean,
    suffix: string,
    title: string,
    cover: string,
    coverSuffix: string,
}

export { IfilesBasesSetting, IfilesBasesConfig, IcoverPosterData, IfilesBasesNofConfig, IfilesBasesSimpleConfig };