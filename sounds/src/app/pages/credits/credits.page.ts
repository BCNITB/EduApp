import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
})
export class CreditsPage implements OnInit {

  language: string = "";

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
}
