import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule } from '../typescripts/free';
import { MDBBootstrapModulePro } from '../typescripts/pro';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from '../auth/login/login.component';
import { SafeHtmlPipe} from '@corelate/shared/pipes';
import { I18nModule } from './i18n/i18n.module';
import { TranslateService } from 'ng2-translate';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { BusyModule } from 'angular2-busy';
import { ColorPickerModule } from 'ngx-color-picker';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { IsAuthorizeDirective } from '@corelate/auth/directive/is-authorize.directive';
import {IsNotAuthorizeDirective} from "@corelate/auth/directive/is-not-authorized.directive";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SafeHtmlPipe,
    SidenavComponent,
    IsAuthorizeDirective,
    IsNotAuthorizeDirective
  ],
  imports: [
    CommonModule,
    I18nModule,
    RouterModule,
    MDBBootstrapModule,
    MDBBootstrapModulePro,
    BusyModule,
    ColorPickerModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    I18nModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MDBBootstrapModule,
    MDBBootstrapModulePro,
    BusyModule,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SidenavComponent,
    SafeHtmlPipe,
    ColorPickerModule,
    IsAuthorizeDirective,
    IsNotAuthorizeDirective
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {
  constructor(private translateService: TranslateService) {
    translateService.addLangs(['en', 'fr']);
    translateService.setDefaultLang('en');
  }
}
