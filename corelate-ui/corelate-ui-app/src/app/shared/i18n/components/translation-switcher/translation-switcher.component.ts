import { Component } from '@angular/core';

import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'corelate-ui-translation-switcher',
  templateUrl: './translation-switcher.component.html',
  styleUrls: ['./translation-switcher.component.scss']
})
export class TranslationSwitcherComponent {
  public currentLanguage: string;

  constructor(public translate: TranslateService) {
    this.currentLanguage = translate.getDefaultLang();
  }

  switchLanguage() {
    this.translate.use(this.currentLanguage);
  }
}
