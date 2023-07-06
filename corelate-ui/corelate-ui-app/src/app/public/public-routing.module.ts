import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from '@corelate/public/browse/catalog/catalog.component';
import { HelpBrowseComponent } from '@corelate/public/browse/help/help-browse.component';
import { ErrorPageComponent } from '@corelate/public/error-pages/error-page.component';
import { ApiDocsComponent } from './api-docs/api-docs.component';
import { FaqsComponent } from './browse/faqs/faq-browse.component';
import { GenContentsBrowseComponent } from './browse/general-contents/gen-contents-browse.component';
import { GenContentsSingleComponent } from './browse/general-contents/gen-contents-single.component';


const routes: Routes = [
  { path: 'api/docs/:module', component: ApiDocsComponent },
  { path: 'catalogs', component: CatalogComponent },
  { path: 'frequently-asked-questions', component: FaqsComponent },
  { path: 'help', component: HelpBrowseComponent },
  { path: 'contents/browse', component: GenContentsBrowseComponent },
  { path: 'contents/view/:id', component: GenContentsSingleComponent },
  { path: 'error/:code', component: ErrorPageComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
