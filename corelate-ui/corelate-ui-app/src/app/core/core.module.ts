import { NgModule } from '@angular/core';

import { DataTableUtil, HttpUtil } from '../shared/utils';
import { AuthGuard, AuthService, RoleGuard } from '@corelate/auth/services';
import { AppInfoService } from '@corelate/features/admin/app-info/app-info.service';
import { SweetAlertService } from 'ngx-sweetalert2';
import {
  BlocksService,
  CarouselService,
  CatalogService,
  GeneralContentService,
  FaqService,
  HeaderService,
  UserService,
  TextTemplateService,
  HelpService,
  FooterService,
  ContactInfoService,
  ContactFormService,
  CustomContentService,
  GridService,
  ShoppingCartService,
  RulesEngineService,
  ColorConfigService,
  SiteHeadService
} from '@corelate/core/services';


@NgModule({
  providers: [
    BlocksService,
    CarouselService,
    CatalogService,
    GeneralContentService,
    FaqService,
    HeaderService,
    UserService,
    TextTemplateService,
    HelpService,
    FooterService,
    ContactInfoService,
    ContactFormService,
    CustomContentService,
    GridService,
    ShoppingCartService,
    RulesEngineService,
    ColorConfigService,
    SiteHeadService,
    AuthGuard,
    AuthService,
    RoleGuard,
    HttpUtil,
    DataTableUtil,
    SweetAlertService,
    AppInfoService
  ]
})

export class CoreModule {}
