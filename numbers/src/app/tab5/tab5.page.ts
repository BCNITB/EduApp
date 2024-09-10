import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from '../services/local-storage.service';
import { Levels } from '../interfaces/levels';

import { LEVELS } from 'src/data/levels';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  isAcceptOpen: boolean;
  isCancelOpen: boolean;

  levels: Levels[];

  sumLvl: string;
  sumDescription: string;
  prodLvl: string;
  prodDescription: string

  lvlSum: number;
  lvlProd: number;

  checkSum: boolean;
  checkProd: boolean;


  constructor(
    private localStorageSrvc: LocalStorageService,
    private router: Router
  ) { 
    
    this.isAcceptOpen = false;
    this.isCancelOpen = false;

    this.levels = LEVELS.slice(0);

    this.sumLvl = '';
    this.sumDescription = '';
    this.prodLvl = '';
    this.prodDescription = '';

    this.lvlSum = 0;
    this.lvlProd = 0;

    this.checkSum = true;
    this.checkProd = true;
  }

  ngOnInit() {
  }

    compareWith(o1:any, o2:any) {
      return o1.id === o2.id;
    }
  
    handleChange(id: number, ev:any) {
      console.log('Current value:', JSON.stringify(ev.target.value));
      if(id == 0){
        this.sumLvl = ev.target.value.level;
        this.sumDescription = ev.target.value.description;
        this.lvlSum = ev.target.value.id;
      }else if(id == 1){
        this.prodLvl = ev.target.value.level;
        this.prodDescription = ev.target.value.description;
        this.lvlProd = ev.target.value.id;
      }
    }
  
    trackItems(index: number, item: any) {
      return item.id;
    }
  
    save(){
      if(this.sumLvl != ''){
        this.localStorageSrvc.setItem('sumLevel', String(this.lvlSum));
        this.checkSum = true;
      }
      else
        this.checkSum = false;
  
      if(this.prodLvl != ''){
        this.localStorageSrvc.setItem('prodLvl', String(this.lvlProd));
        this.checkProd = true;
      }
      else
        this.checkProd = false;
    }

  cancel(){
    this.sumLvl = '';
    this.sumDescription = '';
    this.prodLvl = '';
    this.prodDescription = '';

    this.lvlSum = 0;
    this.lvlProd = 0;

    this.checkSum = true;
    this.checkProd = true;

    //this.router.navigate(['']);
  }

  setOpen(isOpen: boolean){
    this.isAcceptOpen = isOpen;
    this.isCancelOpen = isOpen;
  }
 
} 