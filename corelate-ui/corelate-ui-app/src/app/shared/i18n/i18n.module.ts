import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { TranslationSwitcherComponent } from './components/translation-switcher/translation-switcher.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http],
    }),
    FormsModule
  ],
  exports: [
    TranslateModule,
    TranslationSwitcherComponent
  ],
  declarations: [
    TranslationSwitcherComponent
  ]
})
export class I18nModule { }
