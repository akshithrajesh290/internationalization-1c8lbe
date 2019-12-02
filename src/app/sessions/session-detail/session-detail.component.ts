import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { TdMediaService } from '@covalent/core';
import { name, routes } from '../../data';
import { TranslateService } from '@ngx-translate/core';
import { getSelectedLanguage, SUPPORTED_LANGS } from '../../../config/translate';

@Component({
  selector: 'app-console',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent {

  nav: Object[] = [{
    icon: 'fullscreen',
    route: '/sessions/sessionid/detail',
    title: 'DETAIL',
    description: '',
  }, {
    icon: 'settings',
    route: '.',
    title: 'SETTINGS',
    description: '',
  }
  ];

  constructor(public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    public translate: TranslateService) {

    translate.setDefaultLang('en-US');
    translate.addLangs(SUPPORTED_LANGS);

    // Get selected language and load it
    translate.use(getSelectedLanguage(translate));
    
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));
    Object.assign(this, { name, routes })
  }
}