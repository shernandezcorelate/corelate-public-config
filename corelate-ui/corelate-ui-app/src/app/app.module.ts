import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '@corelate/app-routing.module';
import { AuthModule } from '@corelate/auth/auth.module';
import { CoreModule } from '@corelate/core/core.module';
import { AdminModule } from '@corelate/features/admin/admin.module';
import { UserModule } from '@corelate/features/user/user.module';
import { ActivitiModule } from '@corelate/modules/activiti/activiti.module';
import { PublicModule } from '@corelate/public/public.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ActivitiModule,
    AdminModule,
    PublicModule,
    AuthModule,
    CoreModule,
    UserModule,
    PublicModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBrF883dd18jSz8c7-rmmsKHOeaFAPMnLA'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
