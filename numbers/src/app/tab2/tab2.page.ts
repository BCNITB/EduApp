import { Component } from '@angular/core';

import { LocalStorageService } from '../services/local-storage.service';
import { TranlateConfigService } from '../services/tranlate-config.service';
import { TranslateService } from '@ngx-translate/core';
import { toLower } from 'ionicons/dist/types/components/icon/utils';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  language: any;

  num: number;
  num1: number;
  num2: number;
  sum: number;
  count:number;
  firstNum: number;
  secondNum: number;
  
  option: string;
  attempt: string;
  attempts: string;
  attemptCat: string;
  attemptsCat: string;
  attemptEsp: string;
  attemptsEsp: string;
  attemptEus: string;
  attemptsEus: string;
  attemptGal: string;
  attemptsGal: string;
  result: string;
  word: string;
  msg: string;
  
  resultArray: string[];
  msgArray: string[];
  resultCatArray: string[];
  msgCatArray: string[];
  resultEspArray: string[];
  msgEspArray: string[];
  resultEusArray: string[];
  msgEusArray: string[];
  resultGalArray: string[];
  msgGalArray: string[];
  finalMsg: string[];
  finalCatMsg: string[];
  finalEspMsg: string[];
  finalEusMsg: string[];
  finalGalMsg: string[];

  check: boolean;
  fail: boolean;
  board: boolean;
  
  sound: any;
  audioTime: any;  

  value: any;

  audio=new Audio();

  constructor(
    private translateSrvc: TranslateService,
    private translateConfSrvc: TranlateConfigService,
    private localStorageSrvc: LocalStorageService
  ) {

    this.translateConfSrvc.getDefaultLanguage();
    this.language = this.translateConfSrvc.getCurrentLang();

    this.option = String(this.retrieveFromLocalStorage('sumLvl'));
    
    this.firstNum = this.chooseLevel(1, this.option);
    this.secondNum = this.chooseLevel(2, this.option);

    this.num = 0;
    this.num1 = this.randomNum(0,this.firstNum);
    this.num2 = this.randomNum(0,this.secondNum);
    this.sum = 0;
    this.count = 0;
  
    this.attemptCat = "intent";
    this.attemptsCat = "intents";
    this.attemptEsp = "intento";
    this.attemptsEsp = "intentos";
    this.attemptEus = "intento";
    this.attemptsEus = "intentos";
    this.attemptGal = "intento";
    this.attemptsGal = "intentos";
    this.attempt = "";
    this.attempts = "";
    this.result = "";
    this.word = "";
    this.msg = "";

    this.resultCatArray = ["Resposta correcta", "T'has quedat curt!", "T'has pasat de llarg!"];
    this.msgCatArray = ["Quin crack!", "Gairabé perfecte!", "Has de practicar més", "Esforçat més!", "Tot es millorable"];
    this.finalCatMsg = ["Victòria!", "Oh, no!", "Has perdut!"];
    this.resultEspArray = ["Respuesta correcta", "¡Te has quedado corto!", "¡Te has pasado de largo!"];
    this.msgEspArray = ["¡Qué crack!", "¡Casi perfecto!", "Has de practicar más", "¡Esfuérzate más!", "Todo es mejorable"];
    this.finalEspMsg = ["¡Victoria!", "¡Oh, no!", "¡Perdiste!"];
    this.resultEusArray = ["Respuesta correcta", "¡Te has quedado corto!", "¡Te has pasado de largo!"];
    this.msgEusArray = ["¡Qué crack!", "¡Casi perfecto!", "Has de practicar más", "¡Esfuérzate más!", "Todo es mejorable"];
    this.finalEusMsg = ["¡Victoria!", "¡Oh, no!", "¡Perdiste!"];
    this.resultGalArray = ["Respuesta correcta", "¡Te has quedado corto!", "¡Te has pasado de largo!"];
    this.msgGalArray = ["¡Qué crack!", "¡Casi perfecto!", "Has de practicar más", "¡Esfuérzate más!", "Todo es mejorable"];
    this.finalGalMsg = ["¡Victoria!", "¡Oh, no!", "¡Perdiste!"];
    this.resultArray = [];
    this.msgArray = [];
    this.finalMsg = [];

    switch(this.language){
      case 'ca':
        this.resultArray = this.resultCatArray;
        this.msgArray = this.resultCatArray;
        this.attempt = this.attemptCat;
        this.attempts = this.attemptsCat;
        break;
      case 'es':
        this.resultArray = this.resultEspArray;
        this.msgArray = this.resultEspArray;
        this.attempt = this.attemptEsp;
        this.attempts = this.attemptsEsp;
        break;
      case 'eu':
        this.resultArray = this.resultEusArray;
        this.msgArray = this.resultEusArray;
        this.attempt = this.attemptEus;
        this.attempts = this.attemptsEus;
        break;
      case 'gl':
        this.resultArray = this.resultGalArray;
        this.msgArray = this.resultGalArray;
        this.attempt = this.attemptGal;
        this.attempts = this.attemptsGal;
        break;
      default:
        this.resultArray = this.resultEspArray;
        this.msgArray = this.resultEspArray;
        this.attempt = this.attemptEsp;
        this.attempts = this.attemptsEsp;
        break;
    }

    this.value = String(this.localStorageSrvc.getItem('board'));

    this.check = false;
    this.fail = false;
    
    switch(this.value){
      case "true":
      case "TRUE":
      case "True":
        this.board = true;
        break;
      default:
        this.board = false;
    }
    
  }

  chooseLevel(id: number, lvl: string){
    if(id == 1){
      switch(lvl){
        case 'principiante':
        case 'intermedio':
          return 10;
          break;
        case 'avanzado':
          return 100;
        default:
          return 10;
      }
    }
    else if(id == 2){
      switch(lvl){
        case 'principiante':
          return 10;
          break;
        case 'intermedio':
        case 'avanzado':
          return 100;
        default:
          return 10;
      }
    } else {
      return 10;
    }
  }

  randomNum(a:any, b:any){
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  checkAnswer(){
    
    this.calculateSum();

    if(this.sum == this.num){
      this.result=this.resultArray[0];
      this.check=true;
      this.fail=false;
      this.sound="../../assets/sounds/correct.mp3";
      ++this.count;
    }
    else if(this.sum > this.num){
      this.result=this.resultArray[1];
      this.fail=true;
      this.sound="../../assets/sounds/fail.mp3";
      ++this.count;
    }
    else if(this.sum < this.num){
      this.result=this.resultArray[2];
      this.fail=true;
      this.sound="../../assets/sounds/fail.mp3";
      ++this.count;
    }

    this.play(this.sound);

    if(this.count>1){
      this.word=this.attempts;
    }
    else{
      this.word=this.attempt;
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

  calculateSum() {
    this.sum=this.num1+this.num2;
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
    this.firstNum = this.chooseLevel(1, this.option);
    this.secondNum = this.chooseLevel(2, this.option);
    this.num1 = this.randomNum(0,this.firstNum);
    this.num2 = this.randomNum(0,this.secondNum);

    this.sum = 0;
    this.count = 0;
  
    this.result = "";
    this.word = "";
    this.msg = "";
  
    this.check = false;
    this.fail = false;
  }

  retrieveFromLocalStorage(value: string) {
    return this.localStorageSrvc.getItem(value);
    console.log(value);
  }
}