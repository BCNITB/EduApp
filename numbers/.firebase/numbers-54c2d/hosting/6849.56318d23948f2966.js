"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6849],{6849:(w,h,o)=>{o.r(h),o.d(h,{Tab1PageModule:()=>E});var r=o(1929),l=o(6814),c=o(6223),m=o(6800),t=o(9212),g=o(3704),f=o(4681),p=o(3683);function d(s,i){if(1&s&&(t.TgZ(0,"p",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.AsE("",t.lcZ(2,2,"TRIESNUM")," ",e.count,"")}}function A(s,i){1&s&&t._UZ(0,"p")}function _(s,i){if(1&s){const e=t.EpF();t.TgZ(0,"form")(1,"ion-item")(2,"ion-label",9),t._uU(3),t.ALo(4,"translate"),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"ion-input",10),t.NdJ("ngModelChange",function(a){t.CHM(e);const u=t.oxw();return t.KtG(u.num=a)}),t.qZA()(),t.TgZ(7,"ion-button",11),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.checkAnswer())}),t._uU(8),t.ALo(9,"translate"),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(3),t.lnq("",t.lcZ(4,5,"TYPENUM")," 0 ",t.lcZ(5,7,"AND")," ",e.maxNum,""),t.xp6(3),t.Q6J("ngModel",e.num),t.xp6(2),t.Oqu(t.lcZ(9,9,"CHECKRESULT"))}}function T(s,i){if(1&s){const e=t.EpF();t.TgZ(0,"div",12)(1,"ion-button",11),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.newGame())}),t._uU(2),t.ALo(3,"translate"),t.qZA()()}2&s&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"RESTART")))}function x(s,i){if(1&s&&(t.TgZ(0,"ion-card-header")(1,"ion-card-title"),t._uU(2),t.qZA()()),2&s){const e=t.oxw();t.xp6(2),t.hij(" ",e.result," ")}}function M(s,i){if(1&s&&(t.TgZ(0,"div"),t._UZ(1,"img",13),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.s9C("alt",e.finalEspMsg[0])}}function y(s,i){if(1&s&&(t.TgZ(0,"div"),t._UZ(1,"img",14),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.s9C("alt",e.finalEspMsg[1])}}function P(s,i){if(1&s&&(t.TgZ(0,"div"),t._UZ(1,"img",15),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.s9C("alt",e.finalEspMsg[2])}}const b=(s,i)=>({good:s,bad:i});function C(s,i){if(1&s&&(t.TgZ(0,"div")(1,"p",16),t._uU(2),t.qZA(),t.TgZ(3,"p",17),t._uU(4),t.qZA()()),2&s){const e=t.oxw();t.xp6(2),t.AsE(" Has necesitado: ",e.count," ",e.word,". "),t.xp6(1),t.Q6J("ngClass",t.WLB(4,b,1==e.count,e.count>3)),t.xp6(1),t.hij(" ",e.msg," ")}}const v=[{path:"",component:(()=>{var s;class i{constructor(n,a,u){switch(this.translateSrvc=n,this.translateConfSrvc=a,this.localStorageSrvc=u,this.audio=new Audio,this.language="es",this.maxNum=10,this.num=0,this.num1=this.randomNum(0,this.maxNum),this.count=0,this.attemptsS="intento",this.attemptsP="intentos",this.result="",this.word="",this.msg="",this.msgCatArray=[],this.resultCatArray=[],this.finalCatMsg=[],this.msgEspArray=["\xa1Qu\xe9 crack!","\xa1Casi perfecto!","Has de practicar m\xe1s","\xa1Esfu\xe9rzate m\xe1s!","Todo es mejorable"],this.resultEspArray=["Respuesta correcta","\xa1Te has quedado corto!","\xa1Te has pasado de largo!"],this.finalEspMsg=["\xa1Victoria!","\xa1Oh, no!","\xa1Perdiste!"],this.msgEusArray=[],this.resultEusArray=[],this.finalEusMsg=[],this.msgGalArray=[],this.resultGalArray=[],this.finalGalMsg=[],this.msgArray=[],this.resultArray=[],this.finalMsg=[],this.language){case"ca":this.msgArray=this.msgCatArray,this.resultArray=this.resultCatArray,this.finalMsg=this.finalCatMsg;break;case"es":default:this.msgArray=this.msgEspArray,this.resultArray=this.resultEspArray,this.finalMsg=this.finalEspMsg;break;case"eu":this.msgArray=this.msgEusArray,this.resultArray=this.resultEusArray,this.finalMsg=this.finalEusMsg;break;case"gl":this.msgArray=this.msgGalArray,this.resultArray=this.resultGalArray,this.finalMsg=this.finalGalMsg}this.check=!1,this.fail=!1}chooseLevel(n){switch(n){case"principiante":return 10;case"intermedio":return 50;case"avanzado":return 100;default:return 0}}retrieveFromLocalStorage(n){return this.localStorageSrvc.getItem(n)}randomNum(n,a){return Math.round(Math.random()*(a-n)+parseInt(n,10))}checkAnswer(){switch(this.num1==this.num?(this.result=this.resultArray[0],this.check=!0,this.fail=!1,this.sound="../../assets/sounds/correct.mp3",++this.count):this.num1>this.num?(this.result=this.resultArray[1],this.fail=!0,this.sound="../../assets/sounds/fail.mp3",++this.count):this.num1<this.num&&(this.result=this.resultArray[2],this.fail=!0,this.sound="../../assets/sounds/fail.mp3",++this.count),this.play(this.sound),this.word=this.count>1?this.attemptsP:this.attemptsS,this.count){case 1:this.msg=this.msgArray[0];break;case 2:this.msg=this.msgArray[1];break;case 3:this.msg=this.msgArray[2];break;case 4:this.msg=this.msgArray[3];break;case 5:this.msg=this.msgArray[4];break;default:this.msg="oooops!"}}play(n){this.pauseAudio(n),this.audio.src=n,this.audio.load(),this.audio.play(),this.audioTime=setTimeout(()=>{n.playing=!1},1e3*n.duration)}pauseAudio(n){clearTimeout(this.audioTime),this.audio.pause()}newGame(){this.num=0,this.count=0,this.num1=this.randomNum(0,this.maxNum),this.result="",this.word="",this.msg="",this.check=!1,this.fail=!1}}return(s=i).\u0275fac=function(n){return new(n||s)(t.Y36(g.sK),t.Y36(f.Q),t.Y36(p.n))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-tab1"]],decls:21,vars:14,consts:[[3,"translucent"],["href","https://sounds-f5696.web.app/animal-sounds","slot","end"],[3,"fullscreen"],["ng-init","numAleatorio()",1,"ion-padding"],["class","numbers",4,"ngIf"],[4,"ngIf"],["class","txt-center",4,"ngIf"],["id","p\xecc"],[1,"numbers"],["position","floating","for","checklabel"],["autofocus","true","clearInput","","type","number","min","1","max","200","name","checklabel",3,"ngModel","ngModelChange"],[3,"click"],[1,"txt-center"],["src","../../assets/img/success.png",3,"alt"],["src","../../assets/img/fail.png",3,"alt"],["src","../../assets/img/loose.png",3,"alt"],[1,"score"],[1,"message",3,"ngClass"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"a",1),t._uU(6,"Sonidos de Animales"),t.qZA()()(),t.TgZ(7,"ion-content",2)(8,"div",3),t.YNc(9,d,3,4,"p",4)(10,A,1,0,"p",5)(11,_,10,11,"form",5)(12,T,4,3,"div",6),t.qZA(),t.TgZ(13,"ion-card")(14,"ion-card-content"),t.YNc(15,x,3,1,"ion-card-header",5),t.TgZ(16,"div",7),t.YNc(17,M,2,1,"div",5)(18,y,2,1,"div",5)(19,P,2,1,"div",5)(20,C,5,7,"div",5),t.qZA()()()()),2&n&&(t.Q6J("translucent",!0),t.xp6(3),t.hij(" ",t.lcZ(4,12,"GUESSNUMBERTITLE")," "),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("ngIf",a.count>0),t.xp6(1),t.Q6J("ngIf",a.num<5),t.xp6(1),t.Q6J("ngIf",!a.check&&a.count<5),t.xp6(1),t.Q6J("ngIf",a.check||a.count>4),t.xp6(3),t.Q6J("ngIf",a.count<5),t.xp6(2),t.Q6J("ngIf",a.check),t.xp6(1),t.Q6J("ngIf",a.fail&&a.count<5),t.xp6(1),t.Q6J("ngIf",a.count>4),t.xp6(1),t.Q6J("ngIf",a.check||a.fail&&a.count>5))},dependencies:[r.YG,r.PM,r.FN,r.Zi,r.Dq,r.W2,r.Gu,r.pK,r.Ie,r.Q$,r.wd,r.sr,r.as,r.yf,r.Uj,l.mk,l.O5,c._Y,c.JJ,c.JL,c.On,c.F,g.X$],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}p[_ngcontent-%COMP%]{margin:1vh 10vw}h2[_ngcontent-%COMP%]{font-size:1em;font-weight:bolder;text-align:center}.numbers[_ngcontent-%COMP%]{font-size:.8em}form[_ngcontent-%COMP%]{text-align:center}ion-button[_ngcontent-%COMP%]{margin:2vh 0;width:40vw}.txt-center[_ngcontent-%COMP%]{text-align:center;font-size:1.25em;font-weight:800;color:red}ion-card-title[_ngcontent-%COMP%]{text-align:center;font-size:1.45em}.score[_ngcontent-%COMP%]{text-align:center;font-size:1.2em;font-weight:700}.message[_ngcontent-%COMP%]{text-align:center;font-size:1.5em}img[_ngcontent-%COMP%]{margin:auto;height:20vh;margin-left:40vw}ion-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:3rem}@media (min-width: 700px){p[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]{margin:0 30vw}}"]}),i})()}];let Z=(()=>{var s;class i{}return(s=i).\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[m.Bz.forChild(v),m.Bz]}),i})(),E=(()=>{var s;class i{}return(s=i).\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[r.Pc,l.ez,c.u5,Z,g.aw]}),i})()}}]);