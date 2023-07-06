/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AnalyticsModule } from 'ng2-activiti-analytics';
import { DiagramsModule } from 'ng2-activiti-diagrams';
import { ActivitiFormModule } from 'ng2-activiti-form';
import { ActivitiProcessListModule } from 'ng2-activiti-processlist';
import { ActivitiTaskListModule } from 'ng2-activiti-tasklist';
import { AppConfigService, CoreModule, TRANSLATION_PROVIDER } from 'ng2-alfresco-core';
import { DataTableModule } from 'ng2-alfresco-datatable';
import { DocumentListModule } from 'ng2-alfresco-documentlist';
import { LoginModule } from 'ng2-alfresco-login';
import { SearchModule } from 'ng2-alfresco-search';
import { SocialModule } from 'ng2-alfresco-social';
import { TagModule } from 'ng2-alfresco-tag';
import { UploadModule } from 'ng2-alfresco-upload';
import { UserInfoComponentModule } from 'ng2-alfresco-userinfo';
import { ViewerModule } from 'ng2-alfresco-viewer';
import { WebScriptModule } from 'ng2-alfresco-webscript';

import { Editor3DModule } from 'ng2-3d-editor';
import { ChartsModule } from 'ng2-charts';
import { ActivitiComponent } from './activiti.component';
import { routing } from './activiti.routes';
import { CustomEditorsModule } from './components/activiti/custom-editor/custom-editor.component';
import { FormListDemoComponent } from './components/form/form-list-demo.component';
import { ThemePickerModule } from './components/theme-picker/theme-picker';
import { MaterialModule } from './material.module';
import { DebugAppConfigService } from './services/debug-app-config.service';

import { CustomSourcesComponent } from './components/files/custom-sources.component';
import { ActivitiService } from './services';
import { environment as env } from 'environments/environment';

import {
    AboutComponent,
    ActivitiAppsViewComponent,
    ActivitiDemoComponent,
    ActivitiProcessAttachmentsComponent,
    ActivitiShowDiagramComponent,
    ActivitiTaskAttachmentsComponent,
    DataTableDemoComponent,
    FilesComponent,
    FormDemoComponent,
    FormNodeViewerComponent,
    FormViewerComponent,
    HomeComponent,
    LoginDemoComponent,
    SearchBarComponent,
    SearchComponent,
    SettingsComponent,
    SocialComponent,
    TagComponent,
    WebscriptComponent
} from './components/index';

declare var process: any;

// let appConfigFile = 'assets/configs/app.config.json';
// if (process.env.ENV === 'production') {
//     appConfigFile = 'app.config-prod.json';
// }



export function loadConfig(configService: AppConfigService) {
  return () => configService.load(env.activiti.configPath);
}

export function InitAppConfigServiceProvider(): any {

  return {
    provide: APP_INITIALIZER,
    useFactory: loadConfig,
    deps: [
      AppConfigService
    ],
    multi: true
  };
}

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CoreModule,
        MaterialModule,
        LoginModule.forRoot(),
        SearchModule.forRoot(),
        DataTableModule.forRoot(),
        DocumentListModule,
        UploadModule.forRoot(),
        TagModule.forRoot(),
        SocialModule.forRoot(),
        WebScriptModule.forRoot(),
        ViewerModule,
        ActivitiFormModule.forRoot(),
        ActivitiTaskListModule.forRoot(),
        ActivitiProcessListModule.forRoot(),
        UserInfoComponentModule.forRoot(),
        AnalyticsModule.forRoot(),
        DiagramsModule.forRoot(),
        CustomEditorsModule,
        ChartsModule,
        ThemePickerModule
    ],
    declarations: [
        ActivitiComponent,
        HomeComponent,
        DataTableDemoComponent,
        SearchComponent,
        SearchBarComponent,
        LoginDemoComponent,
        ActivitiDemoComponent,
        ActivitiTaskAttachmentsComponent,
        ActivitiProcessAttachmentsComponent,
        ActivitiShowDiagramComponent,
        ActivitiAppsViewComponent,
        FormViewerComponent,
        WebscriptComponent,
        TagComponent,
        SocialComponent,
        AboutComponent,
        FilesComponent,
        FormNodeViewerComponent,
        SettingsComponent,
        FormDemoComponent,
        FormListDemoComponent,
        CustomSourcesComponent
    ],
    providers: [
        { provide: AppConfigService, useClass: DebugAppConfigService },
        {
            provide: TRANSLATION_PROVIDER,
            multi: true,
            useValue: {
                name: 'app',
                source: 'resources'
            }
        },
        InitAppConfigServiceProvider(),
        ActivitiService
    ],
    bootstrap: [ ActivitiComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActivitiModule { }
