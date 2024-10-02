import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';
import { TranlateConfigService } from '../services/tranlate-config.service';

import { LocalStorageService } from '../services/local-storage.service';
import { Levels } from '../interfaces/levels';

import { LEVELS } from 'src/data/levels';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  levels: Levels[];

  language: any;
  guessLvl: any;
  sumLvl: any;
  prodLvl: any;
  
  cancelModal: string;
  saveModal: string;

  titleMsg: string[];
  lvlMsg: string[];
  titleCatMsg: string[];
  catMsg: string[];
  titleEspMsg: string[];
  espMsg: string[];
  titleEusMsg: string[];
  eusMsg: string[];
  titleGalMsg: string[];
  galMsg: string[];
  modalMsg: string[];
  
  constructor(
    private localStorageSrvc: LocalStorageService,
    private router: Router,
    private translateSrvc: TranslateService,
    private translateConfSrvc: TranlateConfigService,
    private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController 
  ) { 
    
    this.translateConfSrvc.getDefaultLanguage();
    this.language = this.translateConfSrvc.getCurrentLang();

    this.levels = LEVELS.slice(0);

    this.sumLvl = '';
    this.prodLvl = '';
    this.saveModal = '';
    this.cancelModal = '';

    this.catMsg = ['Principiant', 'Intermedi', 'Avançat', 'Cancel·lar'];
    this.titleCatMsg = ["Endivina'm", "Suma'm", "Multiplica'm"];
    this.espMsg = ['Principiante', 'Intermedio', 'Avanzado', 'Cancelar'];
    this.titleEspMsg = ["Adivíname", "Sumame", "Multiplícame"];
    this.eusMsg = ['Principiant', 'Intermedi', 'Avançat', 'Cancelar'];
    this.titleEusMsg = ["Endivina'm", "Suma'm", "Multiplica'm"];
    this.galMsg = ['Principiant', 'Intermedi', 'Avançat', 'Cancelar'];
    this.titleGalMsg = ["Endivina'm", "Suma'm", "Multiplica'm"];
    this.lvlMsg = [];
    this.titleMsg = [];
    this.modalMsg = ['Valors emmagatzemats correctament', 'Cancel·lar', 
                      'Valores almacenados correctamente', 'Cancelar',
                      'Valores almacenados correctamente', 'Cancelar',
                      'Valores almacenados correctamente', 'Cancelar',]

    switch(this.language){
      case 'ca':
        this.lvlMsg = this.catMsg;
        this.titleMsg = this.titleCatMsg;
        this.saveModal = this.modalMsg[0];
        this.cancelModal = this.modalMsg[1];
        break;
      case 'es':
        this.lvlMsg = this.espMsg;
        this.titleMsg = this.titleEspMsg;
        this.saveModal = this.modalMsg[2];
        this.cancelModal = this.modalMsg[3];
        break;
      case 'eu':
        this.lvlMsg = this.eusMsg;
        this.titleMsg = this.titleEusMsg;
        this.saveModal = this.modalMsg[4];
        this.cancelModal = this.modalMsg[5];
        break;
      case 'gl':
        this.lvlMsg = this.galMsg;
        this.titleMsg = this.titleGalMsg;
        this.saveModal = this.modalMsg[6];
        this.cancelModal = this.modalMsg[7];
        break;
      default:
        this.catMsg = this.espMsg;
        this.titleMsg = this.titleEspMsg;
        this.saveModal = this.modalMsg[2];
        this.cancelModal = this.modalMsg[3];
        break;

    }
  }

  ngOnInit() {
  }

  /* Level functions */
  async changeGuess(){
    const actionSheetGuess = await this.actionSheetCtrl.create({
      header: this.titleMsg[0],
      buttons: [{
        text: this.lvlMsg[0],
        icon: 'footsteps-outline',
        handler: () => {
          this.guessLvl = 'principiante';
          this.localStorageSrvc.setItem('guessLvl', this.guessLvl);
          this.presentToast(this.saveModal);
        }
      },{
        text: this.lvlMsg[1],
        icon: 'extension-puzzle-outline',
        handler: () => {
          this.guessLvl = 'intermedio';
          this.localStorageSrvc.setItem('guessLvl', this.guessLvl);
          this.presentToast(this.saveModal);
        }
      },
      {
        text: this.lvlMsg[2],
        icon: 'barbell-outline',
        handler: () => {
          this.guessLvl= 'avanzado';
          this.localStorageSrvc.setItem('guessLvl', this.guessLvl);
          this.presentToast(this.saveModal);
        }
      }, {
        text: this.lvlMsg[3],
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.presentToast(this.cancelModal);
        }
      }
    ]
    });

    await actionSheetGuess.present();

    const { role, data } = await actionSheetGuess.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  async changeSum(){
    const actionSheetSum = await this.actionSheetCtrl.create({
      header: this.titleMsg[1],
      buttons: [{
        text: this.lvlMsg[0],
        icon: 'footsteps-outline',
        handler: () => {
          this.sumLvl = 'principiante';
          this.localStorageSrvc.setItem('sumLvl', this.sumLvl);
          this.presentToast(this.saveModal);
        }
      },{
        text: this.lvlMsg[1],
        icon: 'extension-puzzle-outline',
        handler: () => {
          this.sumLvl = 'intermedio';
          this.localStorageSrvc.setItem('sumLvl', this.sumLvl);
          this.presentToast(this.saveModal);
        }
      },
      {
        text: this.lvlMsg[2],
        icon: 'barbell-outline',
        handler: () => {
          this.sumLvl = 'avanzado';
          this.localStorageSrvc.setItem('sumLvl', this.sumLvl);
          this.presentToast(this.saveModal);
        }
      }, {
        text: this.lvlMsg[0],
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.presentToast(this.cancelModal);
        }
      }
    ]
    });

    await actionSheetSum.present();

    const { role, data } = await actionSheetSum.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  async changeProd(){
    const actionSheetProd = await this.actionSheetCtrl.create({
      header: this.titleMsg[2],
      buttons: [{
        text: this.lvlMsg[0],
        icon: 'footsteps-outline',
        handler: () => {
          this.prodLvl = 'principiante';
          this.localStorageSrvc.setItem('prodLvl', this.prodLvl);
          this.presentToast(this.saveModal);
        }
      },{
        text: this.lvlMsg[1],
        icon: 'extension-puzzle-outline',
        handler: () => {
          this.prodLvl = 'intermedio';
          this.localStorageSrvc.setItem('prodLvl', this.prodLvl);
          this.presentToast(this.saveModal);
        }
      },
      {
        text: this.lvlMsg[2],
        icon: 'barbell-outline',
        handler: () => {
          this.prodLvl = 'avanzado';
          this.localStorageSrvc.setItem('prodLvl', this.prodLvl);
          this.presentToast(this.saveModal);
        }
      }, {
        text: this.lvlMsg[3],
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.presentToast(this.cancelModal);
        }
      }
    ]
    });

    await actionSheetProd.present();

    const { role, data } = await actionSheetProd.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  /* Language Functions */
  async changeLanguage(){
    const actionSheetLang = await this.actionSheetCtrl.create({
      header: 'Idiomas',
      buttons: [{
        text: 'Català',
        icon: 'language-outline',
        handler: () => {
          this.language = 'ca';
          this.translateConfSrvc.setLanguage('ca');
          this.lvlMsg = this.catMsg;
          this.titleMsg = this.titleCatMsg;
          this.presentToast(this.saveModal);
          this.saveModal = this.modalMsg[0];
          this.cancelModal = this.modalMsg[1];
        }
      },{
        text: 'Español',
        icon: 'language-outline',
        handler: () => {
          this.language = 'es';
          this.translateConfSrvc.setLanguage('es');
          this.lvlMsg = this.espMsg;
          this.titleMsg = this.titleEspMsg;
          this.presentToast(this.saveModal);
          this.saveModal = this.modalMsg[2];
          this.cancelModal = this.modalMsg[3];
        }
      },
      {
        text: 'Euskara',
        icon: 'language-outline',
        handler: () => {
          this.language = 'eu';
          this.translateConfSrvc.setLanguage('eu');
          this.lvlMsg = this.eusMsg;
          this.titleMsg = this.titleEusMsg;
          this.presentToast(this.saveModal);
          this.saveModal = this.modalMsg[3];
          this.cancelModal = this.modalMsg[4];
        }
      },{
        text: 'Galego',
        icon: 'language-outline',
        handler: () => {
          this.language = 'gl';
          this.translateConfSrvc.setLanguage('gl');
          this.lvlMsg = this.galMsg;
          this.titleMsg = this.titleGalMsg;
          this.presentToast(this.saveModal);
          this.saveModal = this.modalMsg[4];
          this.cancelModal = this.modalMsg[5];
        }
      }, {
        text: this.lvlMsg[3],
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.presentToast(this.cancelModal);
        }
      }
    ]
    });

    await actionSheetLang.present();

    const { role, data } = await actionSheetLang.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  async presentToast(msg: any) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle',
    });

    await toast.present();
  }
}