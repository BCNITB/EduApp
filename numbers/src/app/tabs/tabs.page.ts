import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TranlateConfigService } from '../services/tranlate-config.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  language: any;

  constructor(
    private translateConfSrvc: TranlateConfigService,
    private translateSrvc: TranslateService
  ) {
    this.translateConfSrvc.getDefaultLanguage();
    this.language = this.translateConfSrvc.getCurrentLang();
  }

}
