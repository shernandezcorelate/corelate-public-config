import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminModule } from '@corelate/features/admin/admin.module';
import { SharedModule } from '@corelate/shared/shared.module';
import { ActivitiModule } from '@corelate/modules/activiti/activiti.module';
import { PublicRoutingModule } from './public-routing.module';

import { ApiDocsComponent } from './api-docs/api-docs.component';
import { CarouselComponent } from './blocks/carousel/carousel.component';
import { CatalogComponent } from './browse/catalog/catalog.component';
import { ContactFormComponent } from './blocks/contact-form/contact-form.component';
import { ContactInfoComponent } from './blocks/contact-info/contact-info.component';
import { FaqComponent } from './blocks/faq/faq.component';
import { FaqsComponent } from './browse/faqs/faq-browse.component';
import { GenContentsBrowseComponent } from './browse/general-contents/gen-contents-browse.component';
import { GenContentsCategoryComponent } from './browse/general-contents/gen-contents-category.component';
import { GenContentsSingleComponent } from './browse/general-contents/gen-contents-single.component';
import { GridComponent } from './blocks/grid/grid.component';
import { HelpComponent } from './blocks/help/help.component';
import { HelpBrowseComponent } from '@corelate/public/browse/help/help-browse.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error-pages/page-not-found.component';
import { ErrorPageComponent } from '@corelate/public/error-pages/error-page.component';
import { CustomContentComponent } from './blocks/custom-content/custom-content.component';
import { UiTemplateComponent } from '@corelate/public/templates/ui-template.component';
import { UiContentComponent } from '@corelate/public/templates/ui-content.component';
import { UiContentNewComponent } from '@corelate/public/templates/ui-content-new.component';
import { UiFaqComponent } from '@corelate/public/templates/ui-faq.component';
import { UiFaqNewComponent } from '@corelate/public/templates/ui-faq-new.component';
import { UiLoginComponent } from '@corelate/public/templates/ui-login.component';
import { UiRegisterComponent } from '@corelate/public/templates/ui-register.component';
import { GeneralContentComponent } from '@corelate/public/blocks/general-content/general-content.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    HomeComponent,
    FaqComponent,
    ContactFormComponent,
    CarouselComponent,
    GeneralContentComponent,
    HelpComponent,
    ContactInfoComponent,
    CustomContentComponent,
    GridComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ApiDocsComponent,
    FaqsComponent,
    GenContentsBrowseComponent,
    GenContentsCategoryComponent,
    GenContentsSingleComponent,
    UiTemplateComponent,
    UiContentComponent,
    UiContentNewComponent,
    UiFaqComponent,
    UiFaqNewComponent,
    UiLoginComponent,
    UiRegisterComponent,
    CatalogComponent,
    HelpBrowseComponent
  ],
  imports: [
    RouterModule,
    AdminModule,
    SharedModule,
    PublicRoutingModule,
    AgmCoreModule,
    ActivitiModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class PublicModule {}
