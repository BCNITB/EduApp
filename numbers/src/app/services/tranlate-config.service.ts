import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranlateConfigService {

  currentLang: any;

  constructor(private translateSrvc: TranslateService) {
    this.currentLang = localStorage.getItem('lang');
   }

   getDefaultLanguage(){
    if (this.currentLang) {
      this.translateSrvc.setDefaultLang(this.currentLang);
    } else {
      localStorage.setItem('lang', this.translateSrvc.getBrowserLang()!);
      this.currentLang = this.translateSrvc.getBrowserLang();
      this.translateSrvc.setDefaultLang(this.currentLang);
    }

    return this.currentLang;
  }

  setLanguage(setLang: string) {
    this.translateSrvc.use(setLang);
    localStorage.setItem('lang', setLang);
  }

  getCurrentLang() {
    return localStorage.getItem('lang');
  }
}