import { Component } from '@angular/core';

import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  num: number;
  num1: number;
  num2: number;
  prod: number;
  count: number;
  firstNum: number;
  secondNum: number;
  
  option: string;
  attempt: string;
  attempts: string;
  result:string;
  word:string;
  msg:string;

  resultArray: string[];
  msgArray: string[];
  
  check: boolean;
  fail: boolean;
  
  sound: any;
  audioTime: any;  

  audio=new Audio();

  constructor(private localStorageSrvc: LocalStorageService) {
    this.option = String(this.retrieveFromLocalStorage('prodLvl'));
    this.firstNum = this.chooseLevel(1, this.option);
    this.secondNum = this.chooseLevel(2, this.option);
    
    this.num = 0;
    this.num1 = this.randomNum(0,this.firstNum);
    this.num2 = this.randomNum(0,this.secondNum);
    this.prod = 0;
    this.count = 0;
  
    this.attempt = "intento";
    this.attempts = "intentos";
    this.result = "";
    this.word = "";
    this.msg = "";

    this.resultArray = ["Respuesta correcta", "¡Te has quedado corto!", "¡Te has pasado de largo!"];
    this.msgArray = ["¡Qué crack!", "¡Casi perfecto!", "Has de practicar más", "¡Esfuérzate más!", "Todo es mejorable"];
  
    this.check = false;
    this.fail = false;
  }

  chooseLevel(id: number, lvl: string){
    if(id == 1){
      switch(lvl){
        case '1':
        case '2':
          return 10;
          break;
        case '3':
          return 100;
        default:
          return 0;
      }
    }
    else if(id == 2){
      switch(lvl){
        case '1':
          return 10;
          break;
        case '2':
        case '3':
          return 100;
        default:
          return 0;
      }
    } else {
      return 0;
    }
  }

  randomNum(a:any, b:any){
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  checkAnswer(){
    
    this.calculateSum();

    if(this.prod == this.num){
      this.result=this.resultArray[0];
      this.check=true;
      this.fail=false;
      this.sound="../../assets/sounds/correct.mp3";
      ++this.count;
    }
    else if(this.prod > this.num){
      this.result=this.resultArray[1];
      this.fail=true;
      this.sound="../../assets/sounds/fail.mp3";
      ++this.count;
    }
    else if(this.prod < this.num){
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
    this.prod=this.num1 * this.num2;
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
    this.num1 = this.randomNum(0,100);
    this.num2 = this.randomNum(0,10);

    this.prod = 0;
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