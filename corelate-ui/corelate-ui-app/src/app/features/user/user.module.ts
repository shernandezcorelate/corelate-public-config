import { NgModule } from '@angular/core';

import { SharedModule } from '@corelate/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { UserProfileComponent } from './profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})

export class UserModule { }
