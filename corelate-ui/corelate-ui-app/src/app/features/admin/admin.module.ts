import { NgModule } from '@angular/core';
import { ContactInfoComponent } from '@corelate/features/admin/contact-info/contact-info.component';
import { FooterComponent } from '@corelate/features/admin/footer/footer.component';
import { GroupFormComponent } from '@corelate/features/admin/group/group-form.component';
import { GroupListComponent } from '@corelate/features/admin/group/group-list.component';
import { GroupService } from '@corelate/features/admin/group/group.service';
import { HelpFormComponent } from '@corelate/features/admin/help/help-form.component';

import { PermissionService } from '@corelate/features/admin/permission/permission.service';
import { UserFormComponent } from '@corelate/features/admin/user-account/user-form.component';
import { UserListComponent } from '@corelate/features/admin/user-account/user-list.component';

import { SharedModule } from '@corelate/shared/shared.module';
// import { Activiti}
import { ActivitiFormModule } from 'ng2-activiti-form';
import { CoreModule } from 'ng2-alfresco-core';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { DragulaModule } from 'ng2-dragula';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { BlockSetupComponent } from './block-setup/block-setup.component';

import { CarouselComponent } from './carousel/carousel.component';
import { CarouselSlideFormComponent } from '@corelate/features/admin/carousel/carousel-slide-form.component';
import { CatalogBatchSaveComponent } from './catalog/catalog-batch-save.component';
import { CatalogFormComponent } from './catalog/catalog-form.component';
import { CatalogUploadComponent } from './catalog/catalog-upload.component';
import { ColorConfigComponent } from './color-config/color-config.component';
import { FaqFormComponent } from './faq/faq-form.component';
import { FaqListComponent } from './faq/faq-list.component';
import { GeneralContentFormComponent } from './general-contents/general-content-form.component';
import { GeneralContentListComponent } from './general-contents/general-content-list.component';
import { HeaderComponent } from './header/header.component';
import { HelpListComponent } from './help/help-list.component';
import { PermissionFormComponent } from './permission/permission-form.component';
import { PermissionListComponent } from './permission/permission-list.component';
import { TextTemplateFormComponent } from './text-template/text-template-form.component';
import { TextTemplateListComponent } from './text-template/text-template-list.component';

import { CustomContentFormComponent } from './custom-content/custom-content-form.component';
import { GridFormComponent } from '@corelate/features/admin/grid/grid-form.component';
import { ShoppingCartComponent } from "@corelate/features/admin/shopping-cart/shopping-cart.component";
import { ShoppingCartHistoryComponent } from "@corelate/features/admin/shopping-cart/shopping-history.component";
import { RulesEngineComponent } from "@corelate/features/admin/rules-engine/rules-engine.component";
import { InboxComponent } from "@corelate/features/admin/inbox/inbox.component";

import { CatalogComponent } from '@corelate/features/admin/catalog/catalog.component';
import { CatalogListComponent } from '@corelate/features/admin/catalog/catalog-list.component';
import { ActivitiFormComponent } from './activiti-form/activiti-form.component';
import { AppInfoComponent } from '@corelate/features/admin/app-info/app-info.component';
import {SiteHeadComponent} from "@corelate/features/admin/site-head/site-head.component";


@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AdminRoutingModule,
    NgxDatatableModule,
    DragulaModule,
    AngularDualListBoxModule,
    ActivitiFormModule
  ],
  declarations: [
    AdminComponent,
    BlockSetupComponent,
    FaqListComponent,
    FaqFormComponent,
    CarouselComponent,
    CarouselSlideFormComponent,
    CatalogComponent,
    CatalogListComponent,
    CatalogFormComponent,
    CatalogBatchSaveComponent,
    CatalogUploadComponent,
    GeneralContentFormComponent,
    GeneralContentListComponent,
    PermissionListComponent,
    PermissionFormComponent,
    GroupListComponent,
    GroupFormComponent,
    ColorConfigComponent,
    TextTemplateFormComponent,
    TextTemplateListComponent,
    HeaderComponent,
    HelpListComponent,
    HelpFormComponent,
    FooterComponent,
    ContactInfoComponent,
    UserFormComponent,
    UserListComponent,
    CustomContentFormComponent,
    GridFormComponent,
    InboxComponent,
    ShoppingCartComponent,
    ShoppingCartHistoryComponent,
    RulesEngineComponent,
    SiteHeadComponent,
    ActivitiFormComponent,
    AppInfoComponent
  ],
  exports: [
    BlockSetupComponent,
    CarouselComponent,
    CatalogComponent,
    FaqListComponent,
    NgxDatatableModule,
    ColorConfigComponent,
    HeaderComponent,
    GeneralContentListComponent,
    FaqListComponent,
    HelpListComponent,
    FooterComponent,
    ContactInfoComponent,
    GridFormComponent,
    CatalogListComponent,
    InboxComponent,
    ShoppingCartComponent,
    ShoppingCartHistoryComponent,
    RulesEngineComponent,
    SiteHeadComponent
  ],
  providers: [
    PermissionService,
    GroupService
  ]
})
export class AdminModule { }
