import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, RoleGuard } from '@corelate/auth/services';

import { AdminComponent } from './admin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselSlideFormComponent } from './carousel/carousel-slide-form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CatalogComponent } from '@corelate/features/admin/catalog/catalog.component';
import { CatalogBatchSaveComponent } from './catalog/catalog-batch-save.component';
import { CatalogFormComponent } from './catalog/catalog-form.component';
import { CatalogUploadComponent } from './catalog/catalog-upload.component';
import { FaqFormComponent } from './faq/faq-form.component';
import { FaqListComponent } from './faq/faq-list.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralContentFormComponent } from './general-contents/general-content-form.component';
import { GeneralContentListComponent } from './general-contents/general-content-list.component';
import { GroupFormComponent } from './group/group-form.component';
import { GroupListComponent } from './group/group-list.component';
import { HeaderComponent } from './header/header.component';
import { HelpFormComponent } from './help/help-form.component';
import { HelpListComponent } from './help/help-list.component';
import { PermissionFormComponent } from './permission/permission-form.component';
import { PermissionListComponent } from './permission/permission-list.component';
import { TextTemplateFormComponent } from './text-template/text-template-form.component';
import { TextTemplateListComponent } from './text-template/text-template-list.component';
import { UserFormComponent } from './user-account/user-form.component';
import { UserListComponent } from './user-account/user-list.component';
import { CustomContentFormComponent } from '@corelate/features/admin/custom-content/custom-content-form.component';
import { GridFormComponent } from '@corelate/features/admin/grid/grid-form.component';
import { InboxComponent } from '@corelate/features/admin/inbox/inbox.component';
import { ShoppingCartComponent } from '@corelate/features/admin/shopping-cart/shopping-cart.component';
import { ShoppingCartHistoryComponent } from '@corelate/features/admin/shopping-cart/shopping-history.component';
import { RulesEngineComponent } from '@corelate/features/admin/rules-engine/rules-engine.component';
import { ActivitiFormComponent } from '@corelate/features/admin/activiti-form/activiti-form.component';
import { ColorConfigComponent } from '@corelate/features/admin/color-config/color-config.component';
import { SiteHeadComponent } from "@corelate/features/admin/site-head/site-head.component";
import { AppInfoComponent } from '@corelate/features/admin/app-info/app-info.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: 'header',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','HEADER_EDIT'] },
        component: HeaderComponent
      },
      { path: 'footer',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','FOOTER_EDIT'] },
        component: FooterComponent
      },
      { path: 'site-head',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','SITE_HEAD_EDIT'] },
        component: SiteHeadComponent
      },
      { path: 'contact-info',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','CONTACT_INFO_EDIT'] },
        component: ContactInfoComponent
      },
      { path: 'task-form/:id', component: ActivitiFormComponent },
      { path: 'color-config',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','COLOR_CONFIGURATION_EDIT'] },
        component: ColorConfigComponent
      },
      { path: 'faq',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','CMS_ADMIN'] },
        children: [
        { path: '', pathMatch: 'full', component: FaqListComponent, data: { roles: ['FAQ_VIEW'] } },
        { path: 'add', component: FaqFormComponent, data: { roles: ['FAQ_ADD'] } },
        { path: 'edit/:id', component: FaqFormComponent, data: { roles: ['FAQ_EDIT'] } },
      ]},
      { path: 'catalog',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','CATALOG_ADMIN'] },
        children: [
        { path: '', pathMatch: 'full', component: CatalogComponent, data: { roles: ['CATALOG_VIEW'] } },
        { path: 'add', component: CatalogFormComponent, data: { roles: ['CATALOG_ADD'] } },
        { path: 'edit/:id', component: CatalogFormComponent, data: { roles: ['CATALOG_EDIT'] } },
        { path: 'batch-save', component: CatalogBatchSaveComponent, data: { roles: ['CATALOG_ADD'] } },
        { path: 'upload', component: CatalogUploadComponent, data: { roles: ['CATALOG_ADD'] } }
      ]},
      { path: 'permission',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','PERMISSIONS_ADMIN'] },
        children: [
        { path: '', pathMatch: 'full', component: PermissionListComponent, data: { roles: ['PERMISSION_MANAGEMENT_VIEW'] } },
        { path: 'add', component: PermissionFormComponent, data: { roles: ['PERMISSION_MANAGEMENT_ADD'] } },
        { path: 'actions/:id', component: PermissionFormComponent, data: { roles: ['PERMISSION_MANAGEMENT_EDIT'] } },
      ]},
      { path: 'group',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','PERMISSIONS_ADMIN'] },
        children: [
        { path: '', pathMatch: 'full', component: GroupListComponent, data: { roles: ['USER_GROUPS_MANAGEMENT_VIEW'] } },
        { path: 'add', component: GroupFormComponent, data: { roles: ['USER_GROUPS_MANAGEMENT_ADD'] } },
        { path: 'edit/:id', component: GroupFormComponent, data: { roles: ['USER_GROUPS_MANAGEMENT_EDIT'] } },
      ]},
      { path: 'general-content',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','CMS_ADMIN'] },
        children: [
        { path: '', pathMatch: 'full', component: GeneralContentListComponent, data: { roles: ['GENERAL_CONTENTS_VIEW'] } },
        { path: 'add', component: GeneralContentFormComponent, data: { roles: ['GENERAL_CONTENTS_ADD'] } },
        { path: 'edit/:id', component: GeneralContentFormComponent, data: { roles: ['GENERAL_CONTENTS_EDIT'] } },
      ]},
      { path: 'text-template',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','CMS_ADMIN'] },
        children: [
        { path: '', pathMatch: 'full', component: TextTemplateListComponent, data: { roles: ['EMAIL_TEMPLATES_MANAGEMENT_VIEW'] } },
        { path: 'add', component: TextTemplateFormComponent, data: { roles: ['EMAIL_TEMPLATES_MANAGEMENT_ADD'] } },
        { path: 'edit/:id', component: TextTemplateFormComponent, data: { roles: ['EMAIL_TEMPLATES_MANAGEMENT_EDIT'] } },
      ]},
      { path: 'online-help',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','CMS_ADMIN'] },
        children: [
        { path: '', pathMatch: 'full', component: HelpListComponent, data: { roles: ['HELP_TOPICS_VIEW'] } },
        { path: 'add', component: HelpFormComponent, data: { roles: ['HELP_TOPICS_ADD'] } },
        { path: 'edit/:id', component: HelpFormComponent, data: { roles: ['HELP_TOPICS_EDIT'] } },
      ]},
      { path: 'carousel',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','CMS_ADMIN'] },
        children: [
        { path: '', pathMatch: 'full', component: CarouselComponent, data: { roles: ['CAROUSEL_VIEW'] } },
        { path: 'add', component: CarouselSlideFormComponent, data: { roles: ['CAROUSEL_ADD'] } },
        { path: 'edit/:id', component: CarouselSlideFormComponent, data: { roles: ['CAROUSEL_EDIT'] } },
      ]},
      { path: 'user',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','USER_ADMIN'] },
        children: [
        { path: '', pathMatch: 'full', component: UserListComponent, data: { roles: ['USER_MANAGEMENT_VIEW'] } },
        { path: 'add', component: UserFormComponent, data: { roles: ['USER_MANAGEMENT_ADD'] } },
        { path: 'edit/:id', component: UserFormComponent, data: { roles: ['USER_MANAGEMENT_EDIT'] } },
      ]},
      { path: 'custom-content',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','CUSTOM_CONTENT_EDIT'] },
        component: CustomContentFormComponent
      },
      { path: 'grid',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','GRID_EDIT'] },
        component: GridFormComponent
      },
      { path: 'inbox',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','INBOX_VIEW'] },
        component: InboxComponent
      },
      { path: 'shopping-cart',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','SHOPPING_CART_ADMIN','SHOPPING_CART_VIEW'] },
        children: [
        { path: '', pathMatch: 'full', component: ShoppingCartComponent },
        { path: 'history', component: ShoppingCartHistoryComponent },
      ]},
      { path: 'rules-engine',
        canActivate: [RoleGuard],
        data: { roles: ['SUPER_ADMIN','RULES_ADMIN','RULES_MANAGEMENT_VIEW'] },
        component: RulesEngineComponent
      },
      { path: 'system/info',  children: [
        { path: '', pathMatch: 'full', component: AppInfoComponent },
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
