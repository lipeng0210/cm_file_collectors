(function(){var e={547:function(e,a,t){"use strict";var s=t(9242),i=(t(7658),t(3396)),r=t(4870),o=t(5501),l=t.n(o);function n(e){const a=/[\u4e00-\u9fa5]/gm;return a.test(e)}function c(e){const a=/[\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF]/gm;return a.test(e)}function u(e){return!(!n(e)&&!c(e))}function d(e){return l().getCamelChars(e).toLowerCase()}function p(e,a){return e=e.replace(/(^\s*)|(\s*$)/g,""),a.indexOf(e)>-1||(u(a)&&(a=d(a)),a.indexOf(e)>-1)}var v=t(4161);async function f(e){try{const a=await(0,v.Z)(e);if(a.status>=200&&a.status<300)return a.data;throw new Error(a.statusText)}catch(a){throw new Error(a.message)}}const m={getFilesBases:async function(){return await f({method:"get",url:"/api/filesBases"})},getFilesRelatedPerformerBases:async function(){return await f({method:"get",url:"/api/filesRelatedPerformerBases"})},getFilesBasesSetting:async function(e){return await f({method:"get",url:`/api/filesBasesSetting/${e}`})},getTagClass:async function(){return await f({method:"get",url:"/api/tagClass"})},getTag:async function(){return await f({method:"get",url:"/api/tag"})}},g={getPerformerList:async()=>{const e=await f({method:"get",url:"/api/performer"});return e}};var h=t(2578);const w=(0,h.Q_)("filesBases",{state:()=>({currentFilesBases:{},filesBasesList:[],filesRelatedPerformerBases:[],performerList:[],tagClassList:[],tagList:[],filesBasesSetting:{}}),getters:{getCurrentFilesBasesMainPerformerBasesId:function(e){for(const a of e.filesRelatedPerformerBases)if(a.filesBases_id==e.currentFilesBases.id&&a.main)return a.performerBases_id},getPerformerListPaging:function(e){return(a=1,t=100,s="")=>{const i=this.getCurrentFilesBasesMainPerformerBasesId,r=[];if(void 0==i)return{dataList:r,count:0};let o=0;const l=(a-1)*t,n=l+t;for(const c of e.performerList)if(c.performerBases_id==i){let e=!0;""!=s&&(p(s,c.name+c.aliasName)||(e=!1)),e&&(o>=l&&o<n&&r.push(c),o++)}return{dataList:r,count:o}}},getPerformerInfoById:function(e){return a=>{for(let t=0;t<e.performerList.length;t++)if(e.performerList[t].id==a)return e.performerList[t]}},getPerformerListByFilesBasesId:function(e){const a=[];return e.filesRelatedPerformerBases.forEach((t=>{t.filesBases_id==e.currentFilesBases.id&&a.push(t.performerBases_id)})),e.performerList.filter((e=>e.status&&a.includes(e.performerBases_id)))},getTagClassListByCurrentFilesBases:function(e){return e.tagClassList.filter((a=>a.filesBases_id==e.currentFilesBases.id&&a.status))},getTagListByTagClassId:function(e){return a=>e.tagList.filter((e=>e.tagClass_id==a&&e.status))},getTagInfoById:function(e){return a=>{for(let t=0;t<e.tagList.length;t++)if(e.tagList[t].id==a)return e.tagList[t]}}},actions:{init:async function(){try{const e=[this.setFilesBasesList(),this.setFilesRelatedPerformerBases(),this.setPerformerList(),this.setTagClassList(),this.setTagList()];await Promise.all(e)}catch(e){console.error(e)}},switchDatabases:async function(e){try{for(const a of this.filesBasesList)a.id==e&&(this.currentFilesBases=a,await this.setFilesBasesSetting(e))}catch(a){console.error(a)}},setFilesBasesList:async function(){const e=await m.getFilesBases();e.length>0&&(this.filesBasesList=e,this.currentFilesBases=e[0],await this.setFilesBasesSetting(this.currentFilesBases.id))},setFilesRelatedPerformerBases:async function(){const e=await m.getFilesRelatedPerformerBases();e.length>0&&(this.filesRelatedPerformerBases=e)},setPerformerList:async function(){const e=await g.getPerformerList();e.length>0&&(this.performerList=e)},setTagClassList:async function(){const e=await m.getTagClass();e.length>0&&(this.tagClassList=e)},setTagList:async function(){const e=await m.getTag();e.length>0&&(this.tagList=e)},setFilesBasesSetting:async function(e){this.filesBasesSetting=await m.getFilesBasesSetting(e)}}});var y,_=t(6810),S=t(2229);(function(e){e[e["mobile"]=0]="mobile",e[e["tablet"]=1]="tablet",e[e["pc"]=2]="pc"})(y||(y={}));const b=()=>{const e=k();return e<768?y.mobile:e>=768&&e<1024?y.tablet:y.pc},k=()=>window.innerWidth,C={needLogin:async function(){return await f({method:"get",url:"/api/needLogin"})},login:async function(e){return await f({method:"post",url:"/api/login",data:{password:e}})}};var I,L,D,B,P=t(2483),x=t(7139);(function(e){e[e["show"]=0]="show",e[e["play"]=1]="play"})(I||(I={})),function(e){e["movies"]="movies",e["comic"]="comic",e["atlas"]="atlas",e["files"]="files",e["videoLink"]="videoLink"}(L||(L={})),function(e){e[e["updateData"]=0]="updateData",e[e["updataDetailsView"]=1]="updataDetailsView"}(D||(D={})),function(e){e[e["single"]=0]="single",e[e["or"]=1]="or",e[e["and"]=2]="and",e[e["not"]=3]="not"}(B||(B={}));var H=t(5101),V=t(3649);const U={class:"popupBody"},T={class:"hearderMenu"},z={class:"pSlot"};var W=(0,i.aZ)({__name:"popupView",props:{title:{type:String,default:""}},emits:["close"],setup(e,{expose:a,emit:t}){const s=e,o=(0,r.iH)(!1),l=(0,i.Fl)((()=>b()==y.mobile||b()==y.tablet?"14.2rem":"19rem")),n=()=>{o.value=!0},c=()=>{o.value=!1,t("close")};return a({open:n}),(e,a)=>((0,i.wg)(),(0,i.j4)((0,r.SU)(H.GI),{show:o.value,"onUpdate:show":a[0]||(a[0]=e=>o.value=e),position:"left",style:(0,x.j5)({width:l.value,height:"100%",padding:"0.2rem"}),onClose:c},{default:(0,i.w5)((()=>[(0,i._)("div",U,[(0,i._)("div",T,[(0,i._)("label",null,(0,x.zw)(s.title),1),(0,i.Wm)((0,r.SU)(V.JO),{name:"cross",onClick:c})]),(0,i._)("div",z,[(0,i.WI)(e.$slots,"default")])])])),_:3},8,["show","style"]))}}),Z=t(89);const F=(0,Z.Z)(W,[["__scopeId","data-v-070194d8"]]);var $=F,j=t(3);const R={class:"perInfoPhoto"},A={class:"perInfoName"};var O=(0,i.aZ)({__name:"performerItemView",props:{perInfo:{type:Object,required:!0},removeNoSelectBgColor:{type:Boolean,default:!1},select:{type:Boolean,default:!1}},setup(e){const a=e,t=(0,i.Fl)((()=>`/api/performerPhoto/${a.perInfo.performerBases_id}/${a.perInfo.photo}`));return(e,s)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,x.C_)(["perInfo",!1!==a.select?"select":a.removeNoSelectBgColor?"":"noSelect"])},[(0,i._)("div",R,[(0,i.Wm)((0,r.SU)(j.Ee),{width:"2.7rem",height:"2.7rem",fit:"cover",round:"",src:t.value},null,8,["src"])]),(0,i._)("div",A,(0,x.zw)(a.perInfo.name),1)],2))}});const K=(0,Z.Z)(O,[["__scopeId","data-v-32035cad"]]);var M=K;const N={resourcesList:async(e,a,t,s,i="desc")=>await f({method:"post",url:`/api/resroucesDataList/${e}/${a}/${t}/${i}`,data:{condition:JSON.stringify(s)}}),resourceInfo:async e=>await f({method:"get",url:`/api/resroucesInfo/${e}`}),resourceDramaSeriesImageInfo:async e=>await f({method:"get",url:`/api/resourceDramaSeriesImageInfo/${e}`}),resourceDramaSeriesVideoInfo:async(e,a)=>await f({method:"get",url:`/api/resourceDramaSeriesVideoInfo/${a}/${e}`})};var Y=t(9357),q=t(2727),E=t(7133),J=t(9545);const G=e=>((0,i.dD)("data-v-46b9f56d"),e=e(),(0,i.Cn)(),e),Q={key:0,class:"resInfo"},X={class:"resInfoContent"},ee={class:"title"},ae={class:"baseInfo"},te={key:0},se={key:1},ie={key:2},re={key:0},oe={key:0,class:"dramaSeries"},le={class:"dramaSeriesList"},ne={class:"performerList"},ce={class:"resInfoContent"},ue={class:"tagList"},de=G((()=>(0,i._)("div",{style:{height:"1rem"}},null,-1)));var pe=(0,i.aZ)({__name:"resourcePopupView",setup(e,{expose:a}){const t=(0,i.f3)("AppLoading"),s=(0,r.iH)(),o=(0,r.iH)(),l={basesStore:w()},n=(0,r.iH)("m3u8"),c=async e=>{t&&t(!0),o.value=await N.resourceInfo(e),console.log(o.value),(0,i.Y3)((()=>{t&&t(!1)}))},u=(0,i.Fl)((()=>`/api/resrouceCoverPoster/${o.value?.filesBases_id}/${o.value?.coverPoster}`)),d=e=>{const a=l.basesStore.getPerformerInfoById(e);return a||{}},p=e=>e.split("\\").pop(),v=e=>{if(e.type==L.files)return;let a;a=e.type==L.atlas?"/playAtlasView/"+e.id:e.type==L.comic?"/playComicView/"+e.id:e.type==L.videoLink?"/playVideoLinkView/"+e.id:`/playVideoView/${n.value}/${e.id}`,window.open(a)},f=async e=>{await c(e),s.value?.open()};return a({open:f}),(e,a)=>((0,i.wg)(),(0,i.j4)($,{ref_key:"popupViewRef",ref:s},{default:(0,i.w5)((()=>[o.value?((0,i.wg)(),(0,i.iD)("div",Q,[(0,i._)("div",X,[(0,i.Wm)((0,r.SU)(j.Ee),{width:"100%",src:u.value},null,8,["src"]),(0,i._)("div",ee,(0,x.zw)(o.value.title),1),(0,i._)("div",ae,[(0,i._)("p",null,(0,x.zw)(e.$t("versionNumber"))+" : "+(0,x.zw)(o.value.issueNumber),1),(0,i._)("p",null,[""!=o.value.issuingDate?((0,i.wg)(),(0,i.iD)("label",te,(0,x.zw)(o.value.issuingDate),1)):(0,i.kq)("",!0),""!=o.value.country?((0,i.wg)(),(0,i.iD)("label",se,(0,x.zw)(e.$t("country."+o.value.country)),1)):(0,i.kq)("",!0),""!=o.value.definition?((0,i.wg)(),(0,i.iD)("label",ie,(0,x.zw)(e.$t("definition."+o.value.definition)),1)):(0,i.kq)("",!0)]),o.value.stars>0?((0,i.wg)(),(0,i.iD)("p",re,[(0,i.Wm)((0,r.SU)(Y.j8),{modelValue:o.value.stars,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value.stars=e),size:"1rem",color:"#ffd21e","void-icon":"star","void-color":"#eee",readonly:""},null,8,["modelValue"])])):(0,i.kq)("",!0)]),o.value.dramaSeries.length>0?((0,i.wg)(),(0,i.iD)("div",oe,[o.value.mode==(0,r.SU)(L).movies?((0,i.wg)(),(0,i.j4)((0,r.SU)(q.mQ),{key:0,active:n.value,"onUpdate:active":a[1]||(a[1]=e=>n.value=e)},{default:(0,i.w5)((()=>[(0,i.Wm)((0,r.SU)(E.OK),{title:"m3u8"+e.$t("stream"),name:"m3u8"},null,8,["title"]),(0,i.Wm)((0,r.SU)(E.OK),{title:"mp4"+e.$t("stream"),name:"mp4"},null,8,["title"])])),_:1},8,["active"])):(0,i.kq)("",!0),(0,i._)("div",null,[(0,i._)("div",le,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.value.dramaSeries,((e,a)=>((0,i.wg)(),(0,i.j4)((0,r.SU)(J.zx),{key:a,plain:"",onClick:a=>v(e)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,x.zw)(p(e.src)),1)])),_:2},1032,["onClick"])))),128))])])])):(0,i.kq)("",!0)]),(0,i._)("div",ne,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.value.directors,((e,a)=>((0,i.wg)(),(0,i.j4)(M,{key:a,perInfo:d(e.performer_id),removeNoSelectBgColor:!0},null,8,["perInfo"])))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.value.performers,((e,a)=>((0,i.wg)(),(0,i.j4)(M,{key:a,perInfo:d(e.performer_id),removeNoSelectBgColor:!0},null,8,["perInfo"])))),128))]),(0,i._)("div",ce,[(0,i._)("div",ue,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.value.tags,((e,a)=>((0,i.wg)(),(0,i.iD)("div",{class:"tag",key:a},(0,x.zw)(l.basesStore.getTagInfoById(e.tag_id)?.name),1)))),128))])]),de])):(0,i.kq)("",!0)])),_:1},512))}});const ve=(0,Z.Z)(pe,[["__scopeId","data-v-46b9f56d"]]);var fe=ve,me=t(7327);class ge{constructor(){(0,me.Z)(this,"previous",0),(0,me.Z)(this,"timeout",void 0)}throttle(e,a=1,...t){const s=Date.now();s-this.previous>a&&(e.apply(this,t),this.previous=s)}throttleTimeout(e,a=1,...t){this.timeout||(this.timeout=Number(setTimeout((()=>{this.timeout=void 0,e.apply(this,t)}),a)))}}const he=(0,h.Q_)("search",{state:()=>({searchCondition:{text:"",country:{logic:B.single,value:[]},definition:{logic:B.single,value:[]},year:{logic:B.single,value:[]},starRating:{logic:B.single,value:[]},performer:{logic:B.single,value:[]},director:{logic:B.single,value:[]},cup:{logic:B.single,value:[]},diyTag:{}}}),getters:{},actions:{searchConditionInit:function(){this.searchCondition.text="",this.searchCondition.country.value.splice(0),this.searchCondition.definition.value.splice(0),this.searchCondition.year.value.splice(0),this.searchCondition.starRating.value.splice(0),this.searchCondition.performer.value.splice(0),this.searchCondition.cup.value.splice(0);for(const e in this.searchCondition.diyTag)this.searchCondition.diyTag[e].value.splice(0)},setSearchText:function(e){this.searchCondition.text=e},setSearchData:function(e,a,t){switch(e){case"country":this.searchCondition.country.logic=a,this.searchCondition.country.value=t;break;case"definition":this.searchCondition.definition.logic=a,this.searchCondition.definition.value=t;break;case"year":this.searchCondition.year.logic=a,this.searchCondition.year.value=t;break;case"starRating":this.searchCondition.starRating.logic=a,this.searchCondition.starRating.value=t;break;case"cup":this.searchCondition.cup.logic=a,this.searchCondition.cup.value=t;break;case"performer":this.searchCondition.performer.logic=a,this.searchCondition.performer.value=t;break;default:""!=e&&(this.searchCondition.diyTag[e]={logic:a,value:t})}},clearPerformer:function(){this.searchCondition.performer.value.splice(0)}}}),we={class:"resourceItem"},ye={class:"resTitle"};var _e=(0,i.aZ)({__name:"resourceItemView",props:{resource:{type:Object,required:!0}},setup(e){const a=e,t=(w(),(0,r.iH)()),s=(0,i.Fl)((()=>`/api/resrouceCoverPoster/${a.resource.filesBases_id}/${a.resource.coverPoster}`)),o=()=>{const e=t.value?.offsetWidth;return void 0==e?"auto":e*a.resource.coverPosterHeight/a.resource.coverPosterWidth+"px"};return(e,l)=>((0,i.wg)(),(0,i.iD)("div",we,[(0,i._)("div",{ref_key:"coverPosterRef",ref:t,class:"coverPoster"},[(0,i.Wm)((0,r.SU)(j.Ee),{src:s.value,fit:"cover","lazy-load":"",style:(0,x.j5)({height:o()})},null,8,["src","style"])],512),(0,i._)("div",ye,(0,x.zw)(a.resource.title),1)]))}});const Se=(0,Z.Z)(_e,[["__scopeId","data-v-747ccd37"]]);var be=Se,ke=t(6073);const Ce={class:"search"},Ie=100;var Le=(0,i.aZ)({__name:"performerPopupView",setup(e,{expose:a}){const t=(0,i.f3)("IndexGetResourcesList"),s={basesStore:w(),searchStore:he()},o=(0,r.iH)(),l=(0,r.iH)(""),n=(0,r.iH)([]),c=(0,r.iH)(0),u=(0,r.iH)(1);let d="";const p=(0,r.iH)(""),v=()=>{n.value=[],u.value=1,d=""},f=()=>{if(y())return;const{dataList:e,count:a}=s.basesStore.getPerformerListPaging(u.value,Ie,d);n.value=[...n.value,...e],c.value=a},m=()=>{v(),d=l.value,f()},g=()=>{v(),f(),l.value="",p.value="",s.searchStore.clearPerformer(),k()},h=e=>{const a=e.target,t=a.scrollHeight,s=a.clientHeight,i=a.scrollTop,r=100,o=t-s-i<r,l=y();o&&!l&&(u.value++,f())},y=()=>u.value>1&&u.value>Math.ceil(c.value/Ie),_=e=>e.id==p.value,S=e=>{p.value=e.id,s.searchStore.setSearchData("performer",B.single,[e.id]),k()},b=()=>{o.value?.open(),f()},k=()=>{t&&t()};return a({open:b}),(e,a)=>((0,i.wg)(),(0,i.j4)($,{ref_key:"popupViewRef",ref:o,title:e.$t("performer"),onClose:v},{default:(0,i.w5)((()=>[(0,i._)("div",Ce,[(0,i.Wm)((0,r.SU)(ke.gN),{class:"searchInput",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),placeholder:e.$t("performerPlaceholder"),border:!1},{button:(0,i.w5)((()=>[(0,i.Wm)((0,r.SU)(J.zx),{size:"small",type:"primary",icon:"search",onClick:m}),(0,i.Wm)((0,r.SU)(J.zx),{size:"small",icon:"replay",onClick:g})])),_:1},8,["modelValue","placeholder"])]),n.value.length>0?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"performerDataList",onScroll:h},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.value,((e,a)=>((0,i.wg)(),(0,i.j4)(M,{key:a,"per-info":e,select:_(e),onClick:a=>S(e)},null,8,["per-info","select","onClick"])))),128))],32)):(0,i.kq)("",!0)])),_:1},8,["title"]))}});const De=(0,Z.Z)(Le,[["__scopeId","data-v-1adca85b"]]);var Be=De,Pe={country:{Asia:["China","Japan","India","SaudiArabia","SouthKorea","NorthKorea","Philippines","Singapore","Kazakhstan","Indonesia","Iraq","Afghanistan","Pakistan","Turkey"],Europe:["England","France","Germany","Italy","Russia","Norway","Iceland","Denmark","Ukraine","Poland","Netherlands","Greece","Spain","Portugal"],America:["America","Canada","Mexico","CostaRica","Cuba","Jamaica","Brazil","Chile","Argentina","Peru"],Oceania:["Australia","NewZealand","Tuvalu","PapuaNewGuinea"],Africa:["Egypt","SouthAfrica","Ethiopia","Congo","Zimbabwe","Madagascar"],OtherCountry:["OtherCountry"]},definition:["8K","4K","2K","1080P","HighDefinition","StandardDefinition"],leftDisplay:["country","definition","year","starRating","performer","diyTag"],tagMode:["fixed","auto"],sortMode:["asc","desc"],cup:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","Max"],resMode:["movies","comic","atlas","files"],resourcesShowMode:["coverPoster","table"],detailsDramaSeriesMode:["fileName","digit"],playAtlasMode:["waterfall","flex"],playComicMode:["scaleToOriginal","fullScreen"]};const xe=["title"];var He=(0,i.aZ)({__name:"tagSpan",props:{text:{type:String,required:!0},select:{type:Boolean,default:!1}},setup(e){const a=e,t={basesStore:w()};return(e,s)=>((0,i.wg)(),(0,i.iD)("span",{class:(0,x.C_)(["tagSpan",t.basesStore.filesBasesSetting.tagMode,!1!==a.select?"select":"noSelect"]),title:a.text},[(0,i._)("label",null,(0,x.zw)(a.text),1)],10,xe))}});const Ve=(0,Z.Z)(He,[["__scopeId","data-v-3c4fd461"]]);var Ue=Ve;const Te={class:"tagBlock"},ze={class:"title"},We={class:"tagList fixedWidth"};var Ze=(0,i.aZ)({__name:"tagBlock",props:{title:{type:String,required:!0},dataList:{type:Array,required:!0},mode:{type:String,default:""}},emits:["updateData"],setup(e,{emit:a}){const t=e,s=(0,r.iH)([]),o=(0,r.iH)(B.single),l=()=>{a("updateData",t.mode,o.value,s.value)},n=e=>{if("all"==e)s.value=[];else if(o.value==B.single)s.value=[e];else{const a=s.value.findIndex((a=>a==e));a>-1?s.value.splice(a,1):s.value.push(e)}l()},c=e=>"all"==e&&0==s.value.length||s.value.indexOf(e)>-1;return(e,a)=>((0,i.wg)(),(0,i.iD)("div",Te,[(0,i._)("div",ze,(0,x.zw)(t.title),1),(0,i._)("div",We,[(0,i.Wm)(Ue,{text:e.$t("tag.all"),onClick:a[0]||(a[0]=e=>n("all")),select:c("all")},null,8,["text","select"]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.dataList,((e,a)=>((0,i.wg)(),(0,i.j4)(Ue,{key:a,text:e.name,onClick:a=>n(e.value),select:c(e.value)},null,8,["text","onClick","select"])))),128))])]))}});const Fe=(0,Z.Z)(Ze,[["__scopeId","data-v-2c596568"]]);var $e=Fe;const je={class:"title"},Re={class:"tagStar"},Ae={class:"tagStarLeft fixedWidth"},Oe={class:"tagStarRight"},Ke=["onClick","select"];var Me=(0,i.aZ)({__name:"tagStar",emits:["updateData"],setup(e,{emit:a}){const t=(0,r.iH)([1,2,3,4,5]),s=(0,r.iH)([]),o=(0,r.iH)(B.single),l=()=>{a("updateData","starRating",o.value,s.value)},n=e=>{if("all"==e)s.value=[];else if("noStar"==e)s.value=["noStar"];else if(o.value==B.single)s.value=[e];else{const a=s.value.findIndex((a=>a==e));a>-1?s.value.splice(a,1):s.value.push(e)}l()},c=e=>"all"==e&&0==s.value.length||("noStar"==e&&"noStar"==s.value[0]||s.value.indexOf(e)>-1);return(e,a)=>((0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",je,(0,x.zw)(e.$t("defaultTag.starRating")),1),(0,i._)("div",Re,[(0,i._)("div",Ae,[(0,i.Wm)(Ue,{text:e.$t("tag.all"),onClick:a[0]||(a[0]=e=>n("all")),select:c("all")},null,8,["text","select"]),(0,i.Wm)(Ue,{text:e.$t("tag.noStar"),onClick:a[1]||(a[1]=e=>n(0)),select:c(0)},{default:(0,i.w5)((()=>[(0,i.Uk)(" >")])),_:1},8,["text","select"])]),(0,i._)("div",Oe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.value,((e,a)=>((0,i.wg)(),(0,i.iD)("div",{class:"starItem",key:a,onClick:a=>n(e),select:c(e)},[(0,i.Wm)((0,r.SU)(Y.j8),{class:(0,x.C_)([!1!==c(e)?"select":"noSelect"]),modelValue:t.value[a],"onUpdate:modelValue":e=>t.value[a]=e,size:25,color:"#ffd21e","void-icon":"star","void-color":"#eee",readonly:""},null,8,["class","modelValue","onUpdate:modelValue"])],8,Ke)))),128))])])]))}});const Ne=(0,Z.Z)(Me,[["__scopeId","data-v-a909708c"]]);var Ye=Ne;const qe={class:"tagPerformer"},Ee={class:"title"},Je={class:"tagList"},Ge={key:0,class:"performerList"},Qe={key:1,class:"performerList"};var Xe=(0,i.aZ)({__name:"tagPerformer",emits:["updateData"],setup(e,{emit:a}){const t={basesStore:w()},s=(0,r.iH)([]),o=(0,r.iH)(B.single),l=()=>{const e=[];t.basesStore.filesBasesSetting.performerPreferred.forEach((a=>{const s=t.basesStore.getPerformerInfoById(a);s&&e.length<t.basesStore.filesBasesSetting.performerShowNum&&e.push(s)}));let a=t.basesStore.filesBasesSetting.performerShowNum-e.length;if(a>0)for(let s=0;s<t.basesStore.getPerformerListByFilesBasesId.length;s++)t.basesStore.filesBasesSetting.shieldNoPerformerPhoto&&""==t.basesStore.getPerformerListByFilesBasesId[s].photo||a>0&&!e.some((e=>e.id==t.basesStore.getPerformerListByFilesBasesId[s].id))&&(a--,e.push(t.basesStore.getPerformerListByFilesBasesId[s]));return e},n=()=>{a("updateData","performer",o.value,s.value)},c=e=>{if("all"==e)s.value=[];else if("noPerformer"==e)s.value=["noPerformer"];else if(o.value==B.single)s.value=[e];else{const a=s.value.findIndex((e=>"noPerformer"==e));a>-1&&s.value.splice(a,1);const t=s.value.findIndex((a=>a==e));t>-1?s.value.splice(t,1):s.value.push(e)}n()},u=e=>"all"==e&&0==s.value.length||("noPerformer"==e&&"noPerformer"==s.value[0]||s.value.indexOf(e)>-1);return(e,a)=>((0,i.wg)(),(0,i.iD)("div",qe,[(0,i._)("div",Ee,(0,x.zw)(e.$t("defaultTag.performer")),1),(0,i._)("div",Je,[(0,i.Wm)(Ue,{text:e.$t("tag.all"),onClick:a[0]||(a[0]=e=>c("all")),select:u("all")},null,8,["text","select"]),(0,i.Wm)(Ue,{text:e.$t("tag.noPerformer"),onClick:a[1]||(a[1]=e=>c("noPerformer")),select:u("noPerformer")},null,8,["text","select"])]),t.basesStore.filesBasesSetting.performerPhoto?((0,i.wg)(),(0,i.iD)("div",Ge,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l(),((e,a)=>((0,i.wg)(),(0,i.j4)(M,{key:a,"per-info":e,onClick:a=>c(e.id),select:u(e.id)},null,8,["per-info","onClick","select"])))),128))])):((0,i.wg)(),(0,i.iD)("div",Qe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l(),((e,a)=>((0,i.wg)(),(0,i.j4)(Ue,{key:a,text:e.name,onClick:a=>c(e.id),select:u(e.id)},null,8,["text","onClick","select"])))),128))]))]))}});const ea=(0,Z.Z)(Xe,[["__scopeId","data-v-6bff3f9b"]]);var aa=ea,ta=t(5658);const sa=e=>((0,i.dD)("data-v-46405897"),e=e(),(0,i.Cn)(),e),ia={class:"search"},ra={class:"searchTagBlock"},oa={key:1},la={key:2},na=sa((()=>(0,i._)("div",{style:{height:"1rem"}},null,-1)));var ca=(0,i.aZ)({__name:"searchPopupView",setup(e,{expose:a}){const t=(0,i.f3)("IndexGetResourcesList"),{t:s}=(0,ta.QT)(),o={basesStore:w(),searchStore:he()},l=(0,r.iH)(),n=(0,r.iH)(""),c=e=>{if("country"==e)return o.basesStore.filesBasesSetting.country.map((e=>({name:s("country."+e),value:e})));if("definition"==e)return o.basesStore.filesBasesSetting.definition.map((e=>({name:s("definition."+e),value:e})));if("year"==e){const e=new Date,a=e.getFullYear(),t=[];for(let i=a;i>2e3;i--)t.push({name:s("tagYear.year",{year:i}),value:i.toString()});return t.push({name:s("tagYear.before2000"),value:"Before2000"}),t}if("cup"==e){const e=[];return Pe.cup.forEach((a=>{e.push({name:a+"-"+o.basesStore.filesBasesSetting.plugInUnit_Cup_Text,value:a})})),e}return[]},u=e=>o.basesStore.getTagListByTagClassId(e).map((e=>({name:e.name,value:e.id}))),d=()=>{o.searchStore.setSearchText(n.value),f()},p=()=>{o.searchStore.searchConditionInit(),f()},v=(e,a,t)=>{o.searchStore.setSearchData(e,a,t),f()},f=()=>{t&&t()},m=()=>{l.value?.open()};return a({open:m}),(e,a)=>((0,i.wg)(),(0,i.j4)($,{ref_key:"popupViewRef",ref:l,title:e.$t("search")},{default:(0,i.w5)((()=>[(0,i._)("div",ia,[(0,i.Wm)((0,r.SU)(ke.gN),{class:"searchInput",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),placeholder:e.$t("searchPlaceholder"),border:!1},{button:(0,i.w5)((()=>[(0,i.Wm)((0,r.SU)(J.zx),{size:"small",type:"primary",icon:"search",onClick:d}),(0,i.Wm)((0,r.SU)(J.zx),{size:"small",icon:"replay",onClick:p})])),_:1},8,["modelValue","placeholder"])]),(0,i._)("div",ra,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.basesStore.filesBasesSetting.leftDisplay,((a,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"tagCom",key:t},["starRating"==a?((0,i.wg)(),(0,i.j4)(Ye,{key:0,onUpdateData:v})):"performer"==a?((0,i.wg)(),(0,i.iD)("div",oa,[(0,i.Wm)(aa,{onUpdateData:v}),o.basesStore.filesBasesSetting.plugInUnit_Cup?((0,i.wg)(),(0,i.j4)($e,{key:0,title:o.basesStore.filesBasesSetting.plugInUnit_Cup_Text,dataList:c("cup"),onUpdateData:v,mode:"cup"},null,8,["title","dataList"])):(0,i.kq)("",!0)])):"diyTag"==a?((0,i.wg)(),(0,i.iD)("div",la,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.basesStore.getTagClassListByCurrentFilesBases.filter((e=>e.leftShow)),((e,a)=>((0,i.wg)(),(0,i.j4)($e,{key:a,title:e.name,dataList:u(e.id),onUpdateData:v,mode:e.id},null,8,["title","dataList","mode"])))),128))])):((0,i.wg)(),(0,i.j4)($e,{key:3,title:e.$t("defaultTag."+a),dataList:c(a),onUpdateData:v,mode:a},null,8,["title","dataList","mode"]))])))),128)),na])])),_:1},8,["title"]))}});const ua=(0,Z.Z)(ca,[["__scopeId","data-v-46405897"]]);var da=ua,pa=t(8971),va=(0,i.aZ)({__name:"switchDatabasesView",setup(e,{expose:a}){const t=(0,i.f3)("AppLoading"),s=(0,i.f3)("IndexGetResourcesList"),o={basesStore:w()},l=(0,r.iH)(!1),n=(0,i.Fl)((()=>o.basesStore.filesBasesList.map((e=>({text:e.name,value:e.id}))))),c=async e=>{e.selectedValues.length>0&&(t&&t(!0),await o.basesStore.switchDatabases(e.selectedValues[0]),t&&t(!1),s&&await s()),d()},u=()=>{l.value=!0},d=()=>{l.value=!1};return a({open:u}),(e,a)=>((0,i.wg)(),(0,i.j4)((0,r.SU)(H.GI),{show:l.value,"onUpdate:show":a[0]||(a[0]=e=>l.value=e),round:""},{default:(0,i.w5)((()=>[(0,i.Wm)((0,r.SU)(pa.cW),{class:"vppicker",columns:n.value,onConfirm:c,onCancel:d},null,8,["columns"])])),_:1},8,["show"]))}});const fa=va;var ma=fa;const ga={class:"menu"},ha={class:"left"},wa={class:"databaseName"},ya={class:"right"};var _a=(0,i.aZ)({__name:"MenuView",setup(e){const a=(0,i.f3)("IndexGetResourcesList"),t={basesStore:w(),searchStore:he()},s=(0,r.iH)(),o=(0,r.iH)(),l=(0,r.iH)(),n=()=>{s.value?.open()},c=()=>{o.value?.open()},u=()=>{l.value?.open()},d=()=>{t.searchStore.searchConditionInit(),a&&a()};return(e,a)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",ga,[(0,i._)("div",ha,[(0,i.Wm)((0,r.SU)(V.JO),{name:"search",size:"1.3rem",onClick:c}),(0,i.Wm)((0,r.SU)(V.JO),{name:"friends-o",size:"1.5rem",onClick:n}),(0,i.Wm)((0,r.SU)(V.JO),{name:"qr",size:"1.3rem",onClick:u}),(0,i._)("label",wa,(0,x.zw)(t.basesStore.currentFilesBases.name),1)]),(0,i._)("div",ya,[(0,i.Wm)((0,r.SU)(V.JO),{name:"replay",size:"1.3rem",onClick:d})])]),(0,i.Wm)(Be,{ref_key:"performerPopupViewRef",ref:s},null,512),(0,i.Wm)(da,{ref_key:"searchPopupViewRef",ref:o},null,512),(0,i.Wm)(ma,{ref_key:"switchDatabasesViewRef",ref:l},null,512)],64))}});const Sa=(0,Z.Z)(_a,[["__scopeId","data-v-69406f2b"]]);var ba=Sa;const ka={class:"indexView"};var Ca=(0,i.aZ)({__name:"IndexView",setup(e){const a=(0,i.f3)("AppLoading"),t={basesStore:w(),searchStore:he()},s=(0,r.iH)([]),o=(0,r.iH)(),l=(0,r.iH)(0),n=(0,r.iH)(1),c=b()==y.pc?70:30,u=(0,r.iH)(0),d=(0,i.Fl)((()=>b()==y.mobile?["mobile","resDiv"]:b()==y.tablet?["tablet","resDiv"]:["desktop","resDiv"])),p=e=>{o.value?.open(e.id)},v=async()=>{a&&a(!0);const{dataList:e,dataCount:r}=await N.resourcesList(t.basesStore.currentFilesBases.id,n.value,c,t.searchStore.searchCondition,t.basesStore.filesBasesSetting.sortMode);s.value=[...s.value,...e],l.value=r,(0,i.Y3)((()=>{a&&a(!1)}))},f=new ge,m=e=>{const a=e.target,t=a.scrollHeight,s=a.clientHeight,i=a.scrollTop;let r=100;b()==y.mobile?r=500:b()==y.tablet&&(r=590);const o=t-s-i<r,l=g();o&&!l&&f.throttleTimeout((()=>{n.value++,v()}),1e3)},g=()=>n.value>1&&n.value>Math.ceil(l.value/c)||l.value<=c,h=async()=>{n.value=1,s.value=[],u.value++,(0,i.Y3)((async()=>{await v()}))};return(0,i.bv)((()=>{v()})),(0,i.JJ)("IndexGetResourcesList",h),(e,a)=>{const t=(0,i.Q2)("masonry-tile"),r=(0,i.Q2)("masonry");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(ba),(0,i._)("div",ka,[(0,i._)("div",{class:(0,x.C_)(d.value),onScroll:m},[(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",{class:"masonry-container",key:u.value,"transition-duration":"0.3s","item-selector":".resItem"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.value,((e,a)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(be,{class:"resItem",key:a,resource:e,onClick:a=>p(e)},null,8,["resource","onClick"])),[[t]]))),128))])),[[r]])],34)]),(0,i.Wm)(fe,{ref_key:"resourcePopupViewRef",ref:o},null,512)],64)}}});const Ia=(0,Z.Z)(Ca,[["__scopeId","data-v-2480fee1"]]);var La=Ia,Da=t(9733);const Ba={class:"login"},Pa={class:"container"},xa={class:"fromDiv"},Ha=["placeholder"];var Va=(0,i.aZ)({__name:"LoginView",setup(e){const{t:a}=(0,ta.QT)(),t=(w(),(0,r.iH)("")),o=async()=>{if(""==t.value)return;const e=await C.login(t.value);e?(sessionStorage.setItem("loginStatus","OK"),Dt.push("/")):(0,Da.LJ)(a("login.message.passwordError"))};return(e,a)=>((0,i.wg)(),(0,i.iD)("div",Ba,[(0,i._)("div",Pa,[(0,i._)("h2",null,(0,x.zw)(e.$t("login.title")),1),(0,i._)("div",xa,[(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),placeholder:e.$t("login.form.password"),required:""},null,8,Ha),[[s.nr,t.value,void 0,{trim:!0}]]),(0,i._)("button",{type:"submit",onClick:o},(0,x.zw)(e.$t("login.form.btnName")),1)])])]))}});const Ua=(0,Z.Z)(Va,[["__scopeId","data-v-692b0faa"]]);var Ta=Ua,za=t(2824);const Wa={class:"playMenu"};var Za=(0,i.aZ)({__name:"playMenuView",props:{title:{type:String,required:!0}},setup(e){const a=e;return(e,t)=>((0,i.wg)(),(0,i.iD)("div",Wa,(0,x.zw)(a.title),1))}});const Fa=(0,Z.Z)(Za,[["__scopeId","data-v-33a56a40"]]);var $a=Fa,ja=t(1835);const Ra={key:0,class:"playAtlasView"},Aa={class:"masonry-container","transition-duration":"0.3s","item-selector":".resItem"};var Oa=(0,i.aZ)({__name:"playAtlasView",setup(e){const a=(0,i.f3)("AppLoading"),t=(0,r.iH)(),s=(0,i.Fl)((()=>b()==y.mobile?["mobile","playAtlasMain"]:b()==y.tablet?["tablet","playAtlasMain"]:["desktop","playAtlasMain"])),o=(0,i.Fl)((()=>t.value?t.value.filesList.map((e=>n(e))):[])),l=async e=>{a&&a(!0),t.value=await N.resourceDramaSeriesImageInfo(e),document.title=t.value.title,(0,i.Y3)((()=>{a&&a(!1)}))},n=e=>`/api/image/${encodeURI(e.src)}`,c=e=>{b()==y.pc?(0,za.preview)(e,o.value):(0,ja.V)({images:o.value,startPosition:e,closeable:!0})};return(0,i.bv)((async()=>{const e=(0,P.yj)(),a=e.params.id;await l(a)})),(e,a)=>{const o=(0,i.Q2)("masonry-tile"),l=(0,i.Q2)("masonry");return t.value?((0,i.wg)(),(0,i.iD)("div",Ra,[(0,i.Wm)($a,{title:t.value.title},null,8,["title"]),(0,i._)("div",{class:(0,x.C_)(s.value)},[(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",Aa,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.value.filesList,((e,a)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)((0,r.SU)(j.Ee),{class:"resItem",key:a,src:n(e),onClick:e=>c(a)},null,8,["src","onClick"])),[[o]]))),128))])),[[l]])],2)])):(0,i.kq)("",!0)}}});const Ka=(0,Z.Z)(Oa,[["__scopeId","data-v-2266eb91"]]);var Ma=Ka;const Na={class:"playComicBody"},Ya={class:"left"},qa={class:"thumbnail"},Ea=["onClick"],Ja={class:"page"},Ga={class:"right"},Qa={class:"showContent"},Xa={class:"btnGroup"},et={class:"nowPageLabel"};var at=(0,i.aZ)({__name:"PlayComicPcView",props:{dataList:{type:Array,required:!0}},setup(e){const a=e,t=(0,r.iH)(0),s=e=>t.value==e,o=e=>{t.value=e},l=e=>`/api/image/${encodeURI(e.src)}`,n=e=>{"per"==e&&t.value>0?t.value=t.value-1:"last"==e&&t.value<a.dataList.length-1&&(t.value=t.value+1)};return(e,c)=>((0,i.wg)(),(0,i.iD)("div",Na,[(0,i._)("div",Ya,[(0,i._)("ul",qa,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.dataList,((e,a)=>((0,i.wg)(),(0,i.iD)("li",{key:a},[(0,i._)("div",{class:(0,x.C_)(["imgDiv",s(a)?"select":""]),onClick:e=>o(a)},[(0,i.Wm)((0,r.SU)(j.Ee),{src:l(e)},null,8,["src"])],10,Ea),(0,i._)("div",Ja,"("+(0,x.zw)(a+1)+")",1)])))),128))])]),(0,i._)("div",Ga,[(0,i._)("div",Qa,[(0,i.Wm)((0,r.SU)(j.Ee),{src:l(a.dataList[t.value]),width:"100%",height:"100%",fit:"scale-down"},null,8,["src"])]),(0,i._)("div",Xa,[(0,i.Wm)((0,r.SU)(J.zx),{plain:"",size:"small",onClick:c[0]||(c[0]=e=>n("per")),disabled:t.value<=0},{default:(0,i.w5)((()=>[(0,i.Uk)((0,x.zw)(e.$t("play.comic.perPage")),1)])),_:1},8,["disabled"]),(0,i._)("label",et,(0,x.zw)(e.$t("play.comic.nowPage",{page:t.value+1})),1),(0,i.Wm)((0,r.SU)(J.zx),{plain:"",size:"small",onClick:c[1]||(c[1]=e=>n("last")),disabled:t.value>=a.dataList.length-1},{default:(0,i.w5)((()=>[(0,i.Uk)((0,x.zw)(e.$t("play.comic.lastPage")),1)])),_:1},8,["disabled"])])])]))}});const tt=(0,Z.Z)(at,[["__scopeId","data-v-0c09a88f"]]);var st=tt,it=t(2691);const rt={key:0,class:"playComicView"},ot={class:"playComicMain"},lt={key:0,class:"pc"},nt={key:1,class:"mobile"},ct={key:0};var ut=(0,i.aZ)({__name:"playComicView",setup(e){const a=(0,i.f3)("AppLoading"),t=(0,r.iH)(),s=async e=>{a&&a(!0),t.value=await N.resourceDramaSeriesImageInfo(e),document.title=t.value.title,(0,i.Y3)((()=>{a&&a(!1)}))},o=e=>`/api/image/${encodeURI(e.src)}`;return(0,i.bv)((async()=>{const e=(0,P.yj)(),a=e.params.id;await s(a)})),(e,a)=>t.value?((0,i.wg)(),(0,i.iD)("div",rt,[(0,i.Wm)($a,{title:t.value.title},null,8,["title"]),(0,i._)("div",ot,[(0,r.SU)(b)()==(0,r.SU)(y).pc?((0,i.wg)(),(0,i.iD)("div",lt,[(0,i.Wm)(st,{dataList:t.value.filesList},null,8,["dataList"])])):((0,i.wg)(),(0,i.iD)("div",nt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.value.filesList,((e,a)=>((0,i.wg)(),(0,i.iD)("div",{class:"mobileItem",key:a},[(0,i.Wm)((0,r.SU)(j.Ee),{class:"resItem",src:o(e)},null,8,["src"]),(0,i.Wm)((0,r.SU)(it.iz),{dashed:!0},{default:(0,i.w5)((()=>[(0,i._)("h5",null,[(0,i.Uk)((0,x.zw)(a+1)+" page ",1),a==t.value.filesList.length-1?((0,i.wg)(),(0,i.iD)("label",ct,"End")):(0,i.kq)("",!0)])])),_:2},1024)])))),128))]))])])):(0,i.kq)("",!0)}});const dt=(0,Z.Z)(ut,[["__scopeId","data-v-4442fbc0"]]);var pt=dt,vt=t(9519);const ft={createM3u8:async e=>await f({method:"get",url:`/api/hls/${e}/video.m3u8`})},mt={class:"playVideo"},gt={key:0,class:"prompt"},ht={key:1};var wt=(0,i.aZ)({__name:"playVideoView",setup(e){const a=(0,i.f3)("AppLoading"),t=(0,r.iH)();let s=null;const o=(0,r.iH)(),l=(0,r.iH)(),n=(0,r.iH)(),c={width:window.innerWidth?window.innerWidth:800,height:window.innerHeight?window.innerHeight:600,controls:!0,loop:!0,autoplay:"auto",bigPlayButton:!0,html5:{vhs:{overrideNative:!0},hls:{overrideNative:!0},nativeVideoTracks:!1,nativeAudioTracks:!1,nativeTextTracks:!1}},u=()=>{t.value&&(s=(0,vt.Z)(t.value,c))},d=(e,a="application/x-mpegURL")=>{s.src({type:a,src:e})},p=async e=>await ft.createM3u8(e),v=async()=>{a&&a(!0),o.value=await N.resourceDramaSeriesVideoInfo(n.value,l.value),document.title=o.value.title,(0,i.Y3)((async()=>{if(a&&a(!1),o.value&&!o.value.m3u8&&"m3u8"==l.value)return await p(n.value),void location.reload();"m3u8"==l.value?d(`/api/hls/${n.value}/video.m3u8`):"mp4"==l.value&&d(`/api/video/${n.value}/video.mp4`,"video/mp4")}))};return(0,i.bv)((async()=>{const e=(0,P.yj)();n.value=e.params.id,l.value=e.params.mode,u(),await v()})),(e,a)=>((0,i.wg)(),(0,i.iD)("div",mt,["m3u8"==l.value&&0==o.value?.m3u8?((0,i.wg)(),(0,i.iD)("div",gt,[(0,i._)("div",null,[(0,i.Wm)((0,r.SU)(S.gb),{color:"#1989fa",size:"3rem"})]),(0,i._)("p",null,(0,x.zw)(e.$t("m3u8.create")),1)])):((0,i.wg)(),(0,i.iD)("div",ht,[a[0]||((0,i.qZ)(-1),a[0]=(0,i._)("video",{ref_key:"videoPlayerRef",ref:t,class:"video-js vjs-default-skin"},null,512),(0,i.qZ)(1),a[0])]))]))}});const yt=(0,Z.Z)(wt,[["__scopeId","data-v-e1952350"]]);var _t=yt;const St={class:"playVideo"};var bt=(0,i.aZ)({__name:"playVideoLinkView",setup(e){const a=(0,i.f3)("AppLoading"),t=(0,r.iH)();let s=null;const o=(0,r.iH)(),l=(0,r.iH)(),n={width:window.innerWidth?window.innerWidth:800,height:window.innerHeight?window.innerHeight:600,controls:!0,loop:!0,autoplay:"auto",bigPlayButton:!0,html5:{vhs:{overrideNative:!0},hls:{overrideNative:!0},nativeVideoTracks:!1,nativeAudioTracks:!1,nativeTextTracks:!1}},c=()=>{t.value&&(s=(0,vt.Z)(t.value,n))},u=(e,a="video/mp4")=>{s&&s.src({type:a,src:e})},d=async()=>{a&&a(!0);const e=await N.resourceDramaSeriesVideoInfo(l.value,o.value);document.title=e.title,(0,i.Y3)((async()=>{a&&a(!1),s||c(),u(e.src)}))};return(0,i.bv)((async()=>{const e=(0,P.yj)();l.value=e.params.id,c(),await d()})),(e,a)=>((0,i.wg)(),(0,i.iD)("div",St,[a[0]||((0,i.qZ)(-1),a[0]=(0,i._)("video",{ref_key:"videoPlayerRef",ref:t,class:"video-js vjs-default-skin"},null,512),(0,i.qZ)(1),a[0])]))}});const kt=(0,Z.Z)(bt,[["__scopeId","data-v-137dc989"]]);var Ct=kt;const It=[{path:"/",name:"home",component:La},{path:"/Login",name:"LoginView",component:Ta},{path:"/playAtlasView/:id",name:"playAtlas",component:Ma},{path:"/playComicView/:id",name:"playComic",component:pt},{path:"/playVideoLinkView/:id",name:"playVideoLink",component:Ct},{path:"/playVideoView/:mode/:id",name:"playVideo",component:_t}],Lt=(0,P.p7)({history:(0,P.PO)("/"),routes:It});var Dt=Lt;const Bt={class:"appLoading"};var Pt=(0,i.aZ)({__name:"App",setup(e){const a={basesStore:w()},t=(0,r.iH)(!0),s=(0,r.iH)(!1),o=e=>{t.value=e},l=()=>{let e="20px";b()==y.mobile?e="5.333333333333vw":b()==y.tablet&&(e="4.333333333333vw"),document.documentElement.style.setProperty("--root-size",e)};return(0,i.bv)((async()=>{l(),await a.basesStore.init(),o(!1),s.value=!0,await C.needLogin()&&"OK"!==sessionStorage.getItem("loginStatus")&&Dt.push("/login")})),(0,i.JJ)("AppLoading",o),(e,a)=>{const o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[s.value?((0,i.wg)(),(0,i.j4)(o,{key:0})):(0,i.kq)("",!0),(0,i.Wm)((0,r.SU)(_.aV),{show:t.value},{default:(0,i.w5)((()=>[(0,i._)("div",Bt,[(0,i.Wm)((0,r.SU)(S.gb),{color:"#1989fa",size:"3rem"})])])),_:1},8,["show"])],64)}}});const xt=Pt;var Ht=xt,Vt={versionNumber:"版号、番号",stream:"流",performer:"演员",performerPlaceholder:"请输入演员姓名",search:"搜索",searchPlaceholder:"请输入名称、版号、番号",login:{title:"登录",form:{password:"密码",btnName:"登录"},message:{passwordError:"密码错误"}},defaultTag:{tagMode:{fixed:"固定大小",auto:"自适应"},country:"国家",definition:"清晰度",year:"年份",starRating:"评分",performer:"演员",diyTag:"自定义标签"},tag:{all:"全部",noStar:"未评分",noPerformer:"无演员"},tagYear:{year:"{year}年",before2000:"2000年前"},play:{comic:{perPage:"上一页",lastPage:"下一页",nowPage:"当前第( {page} )页"}},m3u8:{create:" 正在创建和获取m3u8文件..."},country:{China:"中国",Japan:"日本",India:"印度",SaudiArabia:"沙特阿拉伯",SouthKorea:"韩国",NorthKorea:"朝鲜",Philippines:"菲律宾",Singapore:"新加坡",Kazakhstan:"哈萨克斯坦",Indonesia:"印度尼西亚",Iraq:"伊拉克",Afghanistan:"阿富汗",Pakistan:"巴基斯坦",Turkey:"土耳其",England:"英国",France:"法国",Germany:"德国",Italy:"意大利",Russia:"俄罗斯",Norway:"挪威",Iceland:"冰岛",Denmark:"丹麦",Ukraine:"乌克兰",Poland:"波兰",Netherlands:"荷兰",Greece:"希腊",Spain:"西班牙",Portugal:"葡萄牙",America:"美国",Canada:"加拿大",Mexico:"墨西哥",CostaRica:"哥斯达黎加",Cuba:"古巴",Jamaica:"牙买加",Brazil:"巴西",Chile:"智利",Argentina:"阿根廷",Peru:"秘鲁",Australia:"澳大利亚",NewZealand:"新西兰",Tuvalu:"图瓦卢",PapuaNewGuinea:"巴布亚新几内亚",Egypt:"埃及",SouthAfrica:"南非",Ethiopia:"埃塞俄比亚",Congo:"刚果共和国",Zimbabwe:"津巴布韦",Madagascar:"马达加斯加",OtherCountry:"其他国家"},definition:{"8K":"8K","4K":"4K","2K":"2K","1080P":"1080P","720P":"720P",HighDefinition:"高清",StandardDefinition:"标清"}};const Ut={zhCn:Vt},Tt=(0,ta.o)({globalInjection:!0,locale:"zhCn",messages:Ut,legacy:!1});var zt=Tt,Wt=t(1738),Zt=t(3693);t(5110);const Ft=(0,h.WB)();(0,s.ri)(Ht).use(Ft).use(Dt).use(zt).use(Wt.J).use(Zt.Z).mount("#app")},5893:function(){}},a={};function t(s){var i=a[s];if(void 0!==i)return i.exports;var r=a[s]={exports:{}};return e[s].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,s,i,r){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],i=e[u][1],r=e[u][2];for(var l=!0,n=0;n<s.length;n++)(!1&r||o>=r)&&Object.keys(t.O).every((function(e){return t.O[e](s[n])}))?s.splice(n--,1):(l=!1,r<o&&(o=r));if(l){e.splice(u--,1);var c=i();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,i,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var i,r,o=s[0],l=s[1],n=s[2],c=0;if(o.some((function(a){return 0!==e[a]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(n)var u=n(t)}for(a&&a(s);c<o.length;c++)r=o[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},s=self["webpackChunkCM_Collectores"]=self["webpackChunkCM_Collectores"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(547)}));s=t.O(s)})();
//# sourceMappingURL=app.952bf21c.js.map