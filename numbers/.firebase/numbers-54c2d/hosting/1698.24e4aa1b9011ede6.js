"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1698],{1698:(b,h,o)=>{o.r(h),o.d(h,{Tab5PageModule:()=>f});var v=o(6814),m=o(6223),n=o(1929),g=o(6800),d=o(5861);const M=[{id:1,level:"Principiante",maxLimNum01:10,maxLimNum02:10,description:"Los valores est\xe1n entre 0 y 10"},{id:2,level:"Intermedio",maxLimNum01:100,maxLimNum02:10,description:"El primer valor est\xe1 entre 0 y 100 y el del segundo entre 0 y 10"},{id:3,level:"Avanzado",maxLimNum01:100,maxLimNum02:100,description:"Los valores est\xe1n entre 0 y 100"}];var t=o(9212),p=o(3683),u=o(3704),L=o(4681);const T=[{path:"",component:(()=>{var l;class r{constructor(e,a,s,i,Z,x){switch(this.localStorageSrvc=e,this.router=a,this.translateSrvc=s,this.translateConfSrvc=i,this.actionSheetCtrl=Z,this.toastCtrl=x,this.translateConfSrvc.getDefaultLanguage(),this.language=this.translateConfSrvc.getCurrentLang(),this.levels=M.slice(0),this.sumLvl="",this.prodLvl="",this.saveModal="",this.cancelModal="",this.catMsg=["Principiant","Intermedi","Avan\xe7at","Cancel\xb7lar"],this.titleCatMsg=["Endivina'm","Suma'm","Multiplica'm"],this.espMsg=["Principiante","Intermedio","Avanzado","Cancelar"],this.titleEspMsg=["Adiv\xedname","Sumame","Multipl\xedcame"],this.eusMsg=["Principiant","Intermedi","Avan\xe7at","Cancelar"],this.titleEusMsg=["Endivina'm","Suma'm","Multiplica'm"],this.galMsg=["Principiant","Intermedi","Avan\xe7at","Cancelar"],this.titleGalMsg=["Endivina'm","Suma'm","Multiplica'm"],this.lvlMsg=[],this.titleMsg=[],this.modalMsg=["Valors emmagatzemats correctament","Cancel\xb7lar","Valores almacenados correctamente","Cancelar","Valores almacenados correctamente","Cancelar","Valores almacenados correctamente","Cancelar"],this.language){case"ca":this.lvlMsg=this.catMsg,this.titleMsg=this.titleCatMsg,this.saveModal=this.modalMsg[0],this.cancelModal=this.modalMsg[1];break;case"es":this.lvlMsg=this.espMsg,this.titleMsg=this.titleEspMsg,this.saveModal=this.modalMsg[2],this.cancelModal=this.modalMsg[3];break;case"eu":this.lvlMsg=this.eusMsg,this.titleMsg=this.titleEusMsg,this.saveModal=this.modalMsg[4],this.cancelModal=this.modalMsg[5];break;case"gl":this.lvlMsg=this.galMsg,this.titleMsg=this.titleGalMsg,this.saveModal=this.modalMsg[6],this.cancelModal=this.modalMsg[7];break;default:this.catMsg=this.espMsg,this.titleMsg=this.titleEspMsg,this.saveModal=this.modalMsg[2],this.cancelModal=this.modalMsg[3]}}ngOnInit(){}changeGuess(){var e=this;return(0,d.Z)(function*(){const a=yield e.actionSheetCtrl.create({header:e.titleMsg[0],buttons:[{text:e.lvlMsg[0],icon:"footsteps-outline",handler:()=>{e.guessLvl="principiante",e.localStorageSrvc.setItem("guessLvl",e.guessLvl),e.presentToast(e.saveModal)}},{text:e.lvlMsg[1],icon:"extension-puzzle-outline",handler:()=>{e.guessLvl="intermedio",e.localStorageSrvc.setItem("guessLvl",e.guessLvl),e.presentToast(e.saveModal)}},{text:e.lvlMsg[2],icon:"barbell-outline",handler:()=>{e.guessLvl="avanzado",e.localStorageSrvc.setItem("guessLvl",e.guessLvl),e.presentToast(e.saveModal)}},{text:e.lvlMsg[3],icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked"),e.presentToast(e.cancelModal)}}]});yield a.present();const{role:s,data:i}=yield a.onDidDismiss();console.log("onDidDismiss resolved with role and data",s,i)})()}changeSum(){var e=this;return(0,d.Z)(function*(){const a=yield e.actionSheetCtrl.create({header:e.titleMsg[1],buttons:[{text:e.lvlMsg[0],icon:"footsteps-outline",handler:()=>{e.sumLvl="principiante",e.localStorageSrvc.setItem("sumLvl",e.sumLvl),e.presentToast(e.saveModal)}},{text:e.lvlMsg[1],icon:"extension-puzzle-outline",handler:()=>{e.sumLvl="intermedio",e.localStorageSrvc.setItem("sumLvl",e.sumLvl),e.presentToast(e.saveModal)}},{text:e.lvlMsg[2],icon:"barbell-outline",handler:()=>{e.sumLvl="avanzado",e.localStorageSrvc.setItem("sumLvl",e.sumLvl),e.presentToast(e.saveModal)}},{text:e.lvlMsg[0],icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked"),e.presentToast(e.cancelModal)}}]});yield a.present();const{role:s,data:i}=yield a.onDidDismiss();console.log("onDidDismiss resolved with role and data",s,i)})()}changeProd(){var e=this;return(0,d.Z)(function*(){const a=yield e.actionSheetCtrl.create({header:e.titleMsg[2],buttons:[{text:e.lvlMsg[0],icon:"footsteps-outline",handler:()=>{e.prodLvl="principiante",e.localStorageSrvc.setItem("prodLvl",e.prodLvl),e.presentToast(e.saveModal)}},{text:e.lvlMsg[1],icon:"extension-puzzle-outline",handler:()=>{e.prodLvl="intermedio",e.localStorageSrvc.setItem("prodLvl",e.prodLvl),e.presentToast(e.saveModal)}},{text:e.lvlMsg[2],icon:"barbell-outline",handler:()=>{e.prodLvl="avanzado",e.localStorageSrvc.setItem("prodLvl",e.prodLvl),e.presentToast(e.saveModal)}},{text:e.lvlMsg[3],icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked"),e.presentToast(e.cancelModal)}}]});yield a.present();const{role:s,data:i}=yield a.onDidDismiss();console.log("onDidDismiss resolved with role and data",s,i)})()}changeLanguage(){var e=this;return(0,d.Z)(function*(){const a=yield e.actionSheetCtrl.create({header:"Idiomas",buttons:[{text:"Catal\xe0",icon:"language-outline",handler:()=>{e.language="ca",e.translateConfSrvc.setLanguage("ca"),e.lvlMsg=e.catMsg,e.titleMsg=e.titleCatMsg,e.presentToast(e.saveModal),e.saveModal=e.modalMsg[0],e.cancelModal=e.modalMsg[1]}},{text:"Espa\xf1ol",icon:"language-outline",handler:()=>{e.language="es",e.translateConfSrvc.setLanguage("es"),e.lvlMsg=e.espMsg,e.titleMsg=e.titleEspMsg,e.presentToast(e.saveModal),e.saveModal=e.modalMsg[2],e.cancelModal=e.modalMsg[3]}},{text:"Euskara",icon:"language-outline",handler:()=>{e.language="eu",e.translateConfSrvc.setLanguage("eu"),e.lvlMsg=e.eusMsg,e.titleMsg=e.titleEusMsg,e.presentToast(e.saveModal),e.saveModal=e.modalMsg[3],e.cancelModal=e.modalMsg[4]}},{text:"Galego",icon:"language-outline",handler:()=>{e.language="gl",e.translateConfSrvc.setLanguage("gl"),e.lvlMsg=e.galMsg,e.titleMsg=e.titleGalMsg,e.presentToast(e.saveModal),e.saveModal=e.modalMsg[4],e.cancelModal=e.modalMsg[5]}},{text:e.lvlMsg[3],icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked"),e.presentToast(e.cancelModal)}}]});yield a.present();const{role:s,data:i}=yield a.onDidDismiss();console.log("onDidDismiss resolved with role and data",s,i)})()}presentToast(e){var a=this;return(0,d.Z)(function*(){yield(yield a.toastCtrl.create({message:e,duration:3e3,position:"middle"})).present()})()}}return(l=r).\u0275fac=function(e){return new(e||l)(t.Y36(p.n),t.Y36(g.F0),t.Y36(u.sK),t.Y36(L.Q),t.Y36(n.BX),t.Y36(n.yF))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-tab5"]],decls:53,vars:35,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["text-center",""],["fill","solid","color","primary",3,"click"],["name","help","aria-hidden","true","slot","start"],["name","add","aria-hidden","true","slot","start"],["name","close","aria-hidden","true","slot","start"],["name","language-outline","aria-hidden","true","slot","start"],["fill","solid","color","primary"],["name","text-outline","aria-hidden","true","slot","start"],["name","color-palette-outline","aria-hidden","true","slot","start"]],template:function(e,a){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3),t.ALo(4,"translate"),t.qZA()()(),t.TgZ(5,"ion-content",1)(6,"ion-header",2)(7,"ion-toolbar")(8,"ion-title",3),t._uU(9),t.ALo(10,"translate"),t.qZA()()(),t.TgZ(11,"ion-card")(12,"ion-card-header",4),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"ion-card-content")(16,"ion-buttons")(17,"ion-button",5),t.NdJ("click",function(){return a.changeGuess()}),t._UZ(18,"ion-icon",6),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"ion-button",5),t.NdJ("click",function(){return a.changeSum()}),t._UZ(22,"ion-icon",7),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"ion-button",5),t.NdJ("click",function(){return a.changeProd()}),t._UZ(26,"ion-icon",8),t._uU(27),t.ALo(28,"translate"),t.qZA()()()(),t.TgZ(29,"ion-card")(30,"ion-card-header",4),t._uU(31),t.ALo(32,"translate"),t.qZA(),t.TgZ(33,"ion-card-content")(34,"ion-buttons")(35,"ion-button",5),t.NdJ("click",function(){return a.changeLanguage()}),t._UZ(36,"ion-icon",9),t._uU(37),t.ALo(38,"translate"),t.qZA()()()(),t.TgZ(39,"ion-card")(40,"ion-card-header"),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"ion-card-content")(44,"ion-buttons")(45,"ion-button",10),t._UZ(46,"ion-icon",11),t._uU(47),t.ALo(48,"translate"),t.qZA(),t.TgZ(49,"ion-button",10),t._UZ(50,"ion-icon",12),t._uU(51),t.ALo(52,"translate"),t.qZA()()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(3),t.Oqu(t.lcZ(4,13,"SETTINGS")),t.xp6(2),t.Q6J("fullscreen",!0),t.xp6(4),t.Oqu(t.lcZ(10,15,"SETTINGS")),t.xp6(4),t.Oqu(t.lcZ(14,17,"GAMELEVEL")),t.xp6(6),t.hij(" ",t.lcZ(20,19,"GUESSLEVEL")," "),t.xp6(4),t.hij(" ",t.lcZ(24,21,"PLUSLEVEL")," "),t.xp6(4),t.hij(" ",t.lcZ(28,23,"MULTLEVEL")," "),t.xp6(4),t.Oqu(t.lcZ(32,25,"LANGSELECTION")),t.xp6(6),t.hij(" ",t.lcZ(38,27,"CHOOSELANG")," "),t.xp6(4),t.Oqu(t.lcZ(42,29,"SCRSETTINGS")),t.xp6(6),t.hij(" ",t.lcZ(48,31,"TXTSETTINGS")," "),t.xp6(4),t.hij(" ",t.lcZ(52,33,"COLORSETTINGS")," "))},dependencies:[n.YG,n.Sm,n.PM,n.FN,n.Zi,n.W2,n.Gu,n.gu,n.wd,n.sr,u.X$],styles:["ion-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:5vw;flex-direction:row;flex-wrap:wrap}@media (max-width: 500px){.flex-container[_ngcontent-%COMP%]{flex-direction:column}ion-button[_ngcontent-%COMP%]{width:70vw}}"]}),r})()}];let S=(()=>{var l;class r{}return(l=r).\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.Bz.forChild(T),g.Bz]}),r})(),f=(()=>{var l;class r{}return(l=r).\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[v.ez,m.u5,n.Pc,S,u.aw]}),r})()}}]);