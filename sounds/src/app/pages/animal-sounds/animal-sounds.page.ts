import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';

import { Animal } from 'src/app/interfaces/animal';
import { ANIMALES_ES } from 'src/data/es.animals';
//import { ANIMALES_CA } from 'src/data/ca.animals';
//import { ANIMALES_EU } from 'src/data/eu.animals';
//import { ANIMALES_GL } from 'src/data/gl.animals';

@Component({
  selector: 'app-animal-sounds',
  templateUrl: './animal-sounds.page.html',
  styleUrls: ['./animal-sounds.page.scss'],
})
export class AnimalSoundsPage implements OnInit {

  animals:Animal[]=[];
  audio = new Audio();
  tiempoAudio:any;

  //language:string;

  constructor(
    public navCtrl:NavController,
    private translateSrvc: TranslateService
  ) { 
    //this.language = 'es';
    //this._initTranslate(this.language);
    //this._translateLanguage()
    //this.translateLanguage();

    this.animals=ANIMALES_ES.slice(0);
  }

  ngOnInit() {
  }

  /*initializeApp(){
    this.translateSrvc.setDefaultLang('es');
  }

  ionViewDidEnter(): void {
    this.getDeviceLanguage()
  }

  translateLanguage(): void {
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
      this.language = 'ca';
    }
    this.translateLanguage();
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
  //}

  /*changeLanguage(){
    this.translateLanguage();
    this.selectArray();
  }

  /*selectArray(){
    if(this.language=="es")
      this.animals=ANIMALES_ES.slice(0);
    else if(this.language=="ca")
      this.animals=ANIMALES_CA.slice(0);
    else if(this.language=="eu")
      this.animals=ANIMALES_EU.slice(0);
    else if(this.language=="gl")
      this.animals=ANIMALES_GL.slice(0);
  }*/

  reproducir(animal:Animal){
    console.log(animal);

    this.pausarAudio(animal);

    if(animal.playing){
      animal.playing=false;
      return;
    }
    
    this.audio.src=animal.audio;
    animal.playing=true;
    this.audio.load();
    this.audio.play();

    setTimeout(() => {
      animal.playing=false;
    },
    animal.duration*100);
  }

  pausarAudio(animalSeleccionado:Animal){
    clearTimeout(this.tiempoAudio);

    this.audio.pause();
    this.audio.currentTime=0;

    for(let animal of this.animals){
      if(animal.name != animalSeleccionado.name){
        animal.playing=false;
      }
    }
  }
}