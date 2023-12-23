import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { Sounds } from 'src/app/enums/sounds';
import { Images } from 'src/app/enums/images';

import { TranslateService } from '@ngx-translate/core';

import { AnimaTxt_ES } from 'src/app/enums/es/es.anima-txt';
import { Animals_ES } from 'src/app/enums/es/es.animals';
import { Sentences_ES } from 'src/app/enums/es/es.sentences';

/*import { AnimaTxt_CA } from 'src/app/enums/ca/ca.anima-txt';
import { Animals_CA } from 'src/app/enums/ca/ca.animals';
import { Sentences_CA } from 'src/app/enums/ca/ca.sentences';

import { AnimaTxt_EU } from 'src/app/enums/eu/eu.anima-txt';
import { Animals_EU } from 'src/app/enums/eu/eu.animals';
import { Sentences_EU } from 'src/app/enums/eu/eu.sentences';

import { AnimaTxt_GL } from 'src/app/enums/gl/gl.anima-txt';
import { Animals_GL } from 'src/app/enums/gl/gl.animals';
import { Sentences_GL } from 'src/app/enums/gl/gl.sentences';*/

@Component({
  selector: 'app-animal-guess',
  templateUrl: './animal-guess.page.html',
  styleUrls: ['./animal-guess.page.scss'],
})
export class AnimalGuessPage implements OnInit {

  audio:any;
  
  name = new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('a-zA-Z | *')]);
  
  animal:string = "";
  randomAnimal = this.randomNum(1,8);
  clue1:boolean=false;
  animalPhrase:string = "";
  clue2:boolean=false;
  animalImg:any;
  animalAlt:string  = "";
  count:number=0;
  msg:string  = "";
  msgSol:string  = "";
  score:number = 0;
  clue3:boolean=false;
  tries:boolean=false;
  counter:number=0;
  memoryArray:number[] = [];

  language:string  = "";

  constructor(private translateSrvc: TranslateService) {
    this.language = 'es';
    //this._initTranslate(this.language);
    //this._translateLanguage()
    this._translateLanguage();
  }

  ngOnInit() {
  }

  ionViewDidEnter(): void {
    this.getDeviceLanguage()
  }
  

  _translateLanguage(): void {
    this.translateSrvc.use(this.language);
  }

  _initTranslate(language:string) {
    // Set the default language for translation strings, and the current language.
    this.translateSrvc.setDefaultLang('es');
    if (language) {
      this.language = language;
    }
    else {
      // Set your language here
      this.language = 'es';
    }
    this._translateLanguage();
  }

  getDeviceLanguage() {
    if (window.Intl && typeof window.Intl === 'object') {
      this._initTranslate(navigator.language)
    }
    /*else {
      this.globalization.getPreferredLanguage()
        .then(res => {
          this._initTranslate(res.value)
        })
        .catch(e => {console.log(e);});
    }*/
  }

  changeLanguage(){
    this._translateLanguage();
  }

  start(){
    let animalSound = this.getSound(this.randomAnimal);
    this.play(animalSound);
  }

  randomNum(a:any,b:any){
    let p=Math.round(Math.random() * (b-a) + parseInt(a,10));

    this.checkRandom(p);

    return p;
  }

  checkRandom(p:number){
    for(let i in this.memoryArray){
      if(p==this.memoryArray[i]){
        this.randomNum(1,8);
        break;
      }
      else{
        this.memoryArray.push(p);
      }
    }
  }

  getSound(c:any){
    return Sounds[c];
  }

  getSentence(c:number){
    /*if(this.language=='ca')
      return Sentences_CA[c];
    else if(this.language=='es')
      return Sentences_ES[c];
    else if(this.language=='eu')
      return Sentences_EU[c];
    else if(this.language=='gl')
      return Sentences_GL[c];
    else
      return Sentences_CA[c];*/
      return Sentences_ES[c];
  }

  getImg(c:number){
    return Images[c];
  }

  getAlt(c:number){
    /*if(this.language=='ca')
      return AnimaTxt_CA[c];
    else if(this.language=='es')
      return AnimaTxt_ES[c];
    else if(this.language=='eu')
      return AnimaTxt_EU[c];
    else if(this.language=='gl')
      return AnimaTxt_GL[c];
    else
      return AnimaTxt_CA[c];*/
      return AnimaTxt_ES[c];
  }

  getAnimal(c:number){
    /*if(this.language=='ca')
      return Animals_CA[c];
    else if(this.language=='es')
      return Animals_ES[c];
    else if(this.language=='eu')
      return Animals_EU[c];
    else if(this.language=='gl')
      return Animals_GL[c];
    else
      return Animals_CA[c];*/
      return Animals_ES[c];
  }

  play(c:string){
    this.audio = new Audio(c);
    this.audio.load();
    this.audio.play();
  }

  askClue1(){
    if(this.clue1){
      this.clue1 = false;
    }
    else{
      this.clue1=true;
    }
    this.count = 1;

    this.animalPhrase = this.getSentence(this.randomAnimal);
  }

  askClue2(){
    if(this.clue2){
      this.clue2 = false;
    }
    else{
      this.clue2=true;
    }
    this.count = 2;

    this.animalImg = this.getImg(this.randomAnimal);
    console.log("puntero animal: ", this.animalImg);
    this.animalAlt = this.getAlt(this.randomAnimal);
  }

  askClue3(){
    this.clue3=true;
    this.count = 3;

    this.translateSrvc.get('MSG01').subscribe((res: string) => {
      this.msg = res;
    });

    this.translateSrvc.get('LASTMSG').subscribe((res: string) => {
      this.msgSol = res;
    });
    
    this.score=0;

    this.animalImg = this.getImg(this.randomAnimal);
    this.animalAlt = this.getAnimal(this.randomAnimal);
  }

  answer(){
    ++this.counter;
    this.tries=true;

    if(this.counter<=5){
      if(this.animal.toLowerCase()===this.getAnimal(this.randomAnimal)){
        if(this.count==0){
          this.animalImg = this.getImg(this.randomAnimal);
          this.animalAlt = this.getAnimal(this.randomAnimal);
          this.clue3=true;
          switch(this.counter){
            case 1:
              this.score=15;
              this.translateSrvc.get('MSG02').subscribe((res: string) => {
                this.msg = res;
              });
              break;
            case 2:
              this.score=14;
              this.translateSrvc.get('MSG03').subscribe((res: string) => {
                this.msg = res;
              });
              break;
            case 3:
              this.score=14;
              this.translateSrvc.get('MSG04').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=13;
              break;
            case 4:
              this.score=14;
              this.translateSrvc.get('MSG05').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=12;
              break;
            case 5:
              this.score=14;
              this.translateSrvc.get('MSG06').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=11;
              break;
          }
        }
        else if(this.count==1){
          this.animalImg = this.getImg(this.randomAnimal);
          this.animalAlt = this.getAnimal(this.randomAnimal);
          this.clue3=true;
          
          switch(this.counter){
            case 1:
              this.translateSrvc.get('MSG07').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=10;
              break;
            case 2:
              this.translateSrvc.get('MSG08').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=9;
              break;
            case 3:
              this.translateSrvc.get('MSG09').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=8;
              break;
            case 4:
              this.translateSrvc.get('MSG10').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=7;
              break;
            case 5:
              this.translateSrvc.get('MSG11').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=6;
              break;
          }
        }
        else if(this.count==2){
          this.animalImg = this.getImg(this.randomAnimal);
          this.animalAlt = this.getAnimal(this.randomAnimal);
          this.clue3=true;

          switch(this.counter){
            case 1:
              this.translateSrvc.get('MSG12').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=5;
              break;
            case 2:
              this.translateSrvc.get('MSG13').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=4;
              break;
            case 3:
              this.translateSrvc.get('MSG14').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=3;
              break;
            case 4:
              this.translateSrvc.get('MSG15').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=2;
              break;
            case 5:
              this.translateSrvc.get('MSG16').subscribe((res: string) => {
                this.msg = res;
              });
              this.score=1;
              break;
          }
        }
      }
    }
    else{
      this.translateSrvc.get('MSG17').subscribe((res: string) => {
        this.msg = res;
      });
      this.clue3=true;
      this.askClue3();
      this.score=0;
    }
  }

  restart(){
    this.animal="";
    this.randomAnimal = this.randomNum(1,8);
    this.clue1=false;
    this.clue2=false;
    this.count=0;
    this.clue3=false;
    this.tries=false;
    this.counter=0;
    this.msg="";
    this.score=0;

    if(this.memoryArray.length==8){
      this.memoryArray=[];
    }
  }
}