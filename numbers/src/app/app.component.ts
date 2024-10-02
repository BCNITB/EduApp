import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translateSrvc: TranslateService) {
    this.translateSrvc.setDefaultLang('es');
    this.translateSrvc.use('es');
  }
}
