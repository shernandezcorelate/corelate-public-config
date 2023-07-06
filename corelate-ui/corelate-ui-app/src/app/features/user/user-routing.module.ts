import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@corelate/auth/services';

import { UserProfileComponent } from './profile/user-profile.component';
import { DashboardComponent } from '@corelate/features/user/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'my-profile', canActivate: [AuthGuard], component: UserProfileComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {}
