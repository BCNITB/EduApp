import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sonidos de Animales', url: '/pages/animal-sounds', icon: 'mail' },
    { title: 'Adivina el animal', url: '/pages/animal-guess', icon: 'paper-plane' },
    /*{ title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },*/
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor(private translateSrvc: TranslateService) {
    this.initializeApp();
  }

  initializeApp(){
    this.translateSrvc.setDefaultLang('es');
  }
}