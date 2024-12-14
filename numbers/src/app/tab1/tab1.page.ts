import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranlateConfigService } from '../services/tranlate-config.service';

import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  language: any;

  maxNum: number;
  num: number;
  num1: number;
  count:number;
  
  option: string;
  attemptsS: string;
  attemptsP: string;
  result:string;
    
  word: string;
  msg: string;
  
  msgArray: string[];
  resultArray: string[];
  finalMsg: string[];
  msgCatArray: string[];
  resultCatArray: string[];
  finalCatMsg: string[];
  msgEspArray: string[];
  resultEspArray: string[];
  finalEspMsg: string[];
  msgEusArray: string[];
  resultEusArray: string[];
  finalEusMsg: string[];
  msgGalArray: string[];
  resultGalArray: string[];
  finalGalMsg: string[];

  check: boolean;
  fail: boolean;
  
  sound: any;
    
  audio=new Audio();
  audioTime: any;

  constructor(
    private translateSrvc: TranslateService,
    private translateConfSrvc: TranlateConfigService,
    private localStorageSrvc: LocalStorageService
  ) {
    this.translateConfSrvc.getDefaultLanguage();
    this.language = this.translateConfSrvc.getCurrentLang();

    this.option = String(this.retrieveFromLocalStorage('guessLvl'));
    this.maxNum = this.chooseLevel(this.option);

    this.num = 0;
    this.num1 = this.randomNum(0,this.maxNum);
    this.count = 0;
  
    this.attemptsS = "intento";
    this.attemptsP = "intentos";
    this.result = "";
    this.word = "";
    this.msg = "";
  
    this.msgCatArray = [];
    this.resultCatArray =[];
    this.finalCatMsg = [];
    this.msgEspArray = ["¡Qué crack!", "¡Casi perfecto!", "Has de practicar más", "¡Esfuérzate más!", "Todo es mejorable"];
    this.resultEspArray = ["Respuesta correcta", "¡Te has quedado corto!", "¡Te has pasado de largo!"];
    this.finalEspMsg = ["¡Victoria!", "¡Oh, no!", "¡Perdiste!"];
    this.msgEusArray = [];
    this.resultEusArray =[];
    this.finalEusMsg = [];
    this.msgGalArray = [];
    this.resultGalArray =[];
    this.finalGalMsg = [];
    this.msgArray = [];
    this.resultArray = [];
    this.finalMsg = [];

    switch(this.language){
      case 'ca':
        this.msgArray = this.msgCatArray;
        this.resultArray = this.resultCatArray;
        this.finalMsg = this.finalCatMsg;
        break;
      case 'es':
        this.msgArray = this.msgEspArray;
        this.resultArray = this.resultEspArray;
        this.finalMsg = this.finalEspMsg;
        break;
      case 'eu':
        this.msgArray = this.msgEusArray;
        this.resultArray = this.resultEusArray;
        this.finalMsg = this.finalEusMsg;
        break;
      case 'gl':
        this.msgArray = this.msgGalArray;
        this.resultArray = this.resultGalArray;
        this.finalMsg = this.finalGalMsg;
        break;
      default:
        this.msgArray = this.msgEspArray;
        this.resultArray = this.resultEspArray;
        this.finalMsg = this.finalEspMsg;
    }

    this.check = false;
    this.fail = false;
  }

  chooseLevel(lvl: string){
    switch(lvl){
      case 'principiante':
        return 10;
      case 'intermedio':
        return 50;
        break;
      case 'avanzado':
        return 100;
      default:
        return 10;
    }
  }

  retrieveFromLocalStorage(value: string) {
    return this.localStorageSrvc.getItem(value);
    console.log(value);
  }

  randomNum(a: any, b: any){
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  checkAnswer(){

    if(this.num1 == this.num){
      this.result=this.resultArray[0];
      this.check=true;
      this.fail=false;
      this.sound="../../assets/sounds/correct.mp3";
      ++this.count;
    }
    else if(this.num1 > this.num){
      this.result=this.resultArray[1];
      this.fail=true;
      this.sound="../../assets/sounds/fail.mp3";
      ++this.count;
    }
    else if(this.num1 < this.num){
      this.result=this.resultArray[2];
      this.fail=true;
      this.sound="../../assets/sounds/fail.mp3";
      ++this.count;
    }

    this.play(this.sound);

    if(this.count>1){
      this.word=this.attemptsP;
    }
    else{
      this.word=this.attemptsS;
    }

    switch(this.count){
      case 1:
        this.msg=this.msgArray[0];
        break;
      case 2:
        this.msg=this.msgArray[1];
        break;
        case 3:
          this.msg=this.msgArray[2];
          break;
          case 4:
            this.msg=this.msgArray[3];
            break;
          case 5:
            this.msg=this.msgArray[4];
            break;
      default:
        this.msg="oooops!";
        break;
    }
  }

  play(sound:any) {
    this.pauseAudio(sound);

    this.audio.src=sound;
    this.audio.load();
    this.audio.play();

    this.audioTime=setTimeout(() =>{
      sound.playing=false;
    }, sound.duration*1000);
  }

  private pauseAudio(selectedSound: any){
    clearTimeout(this.audioTime);

    this.audio.pause();
  }

  newGame(){
    this.num = 0;
    this.count = 0;

    this.num1 = this.randomNum(0,this.maxNum);
  
    this.result = "";
    this.word = "";
    this.msg = "";
  
    this.check = false;
    this.fail = false;
  }
}