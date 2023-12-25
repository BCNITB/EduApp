import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  num:number;
  num1:number;
  count:number;
  
  attemptsS: string;
  attemptsP: string;
  result:string;
    
  word:string;
  msg:string;
  
  msgArray:string[];
  resultArray:string[];


  check:boolean;
  fail:boolean;
  
  sound:any;
    
  audio=new Audio();
  audioTime:any;

  constructor() {
    this.num = 0;
    this.num1 = this.randomNum(0,10);
    this.count = 0;
  
    this.attemptsS = "intento";
    this.attemptsP = "intentos";
    this.result = "";
    this.word = "";
    this.msg = "";
  
    this.msgArray=["¡Qué crack!", "¡Casi perfecto!", "Has de practicar más", "¡Esfuérzate más!", "Todo es mejorable"];
    this.resultArray=["Respuesta correcta", "¡Te has quedado corto!", "¡Te has pasado de largo!"];

    this.check = false;
    this.fail = false;
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

    this.num1 = this.randomNum(0,10);
  
    this.result = "";
    this.word = "";
    this.msg = "";
  
    this.check = false;
    this.fail = false;
  }
}