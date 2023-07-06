import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc-hybrid';

import { SharedModule } from '@corelate/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AccountActivationComponent } from './activation/account-activation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';


@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    AuthRoutingModule,
    PasswordStrengthBarModule
  ],
  declarations: [
    RegistrationComponent,
    AccountActivationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ]
})
export class AuthModule {}
