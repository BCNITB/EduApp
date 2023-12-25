import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  num:number = 0;
  num1:number = this.randomNum(0,100);
  num2:number = this.randomNum(0,10);
  prod:number = 0;
  count:number = 0;
  
  attempt: string = "intento";
  attempts: string = "intentos";
  result:string = "";
  word:string = "";
  msg:string = "";

  resultArray:string[]=["Respuesta correcta", "¡Te has quedado corto!", "¡Te has pasado de largo!"];
  msgArray:string[]=["¡Qué crack!", "¡Casi perfecto!", "Has de practicar más", "¡Esfuérzate más!", "Todo es mejorable"];
  
  check:boolean=false;
  fail:boolean=false;
  
  sound:any;
    
  audio=new Audio();
  audioTime:any;

  constructor() {}

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
}