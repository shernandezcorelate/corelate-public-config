import { Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';

import { Principal, User } from '@corelate/shared/models';
import { HttpUtil } from '@corelate/shared/utils';
import { OAuthService } from 'angular-oauth2-oidc-hybrid';

import { environment as env } from 'environments/environment';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService  {

  constructor(private oauthService: OAuthService, private httpUtil: HttpUtil, private http: Http) {
    this.oauthService.loginUrl = env.oauthLoginUrl;
    this.oauthService.redirectUri = env.oauthDashboardUrl;
    this.oauthService.logoutUrl = env.oauthLogoutUrl;
    this.oauthService.clientId = 'corelate_implicit_client';
    this.oauthService.scope = 'read write';
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tryLogin({
      onTokenReceived: context => {
        console.log(context);
      }
    });
  }

  setRedirectUri(url: string) {
    this.oauthService.redirectUri = env.oauthRedirectUrl + url;
  }

  obtainAccessToken() {
    this.oauthService.initImplicitFlow();
  }

  getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  isAuthenticated() {
    if (this.oauthService.getAccessToken() !== null) {
      return true;
    }
    return false;
  }

  isTokenValid(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  logout() {
    this.oauthService.redirectUri = env.oauthRedirectUrl;
    this.oauthService.logOut();
  }

  getPrincipalUser(): Observable<Principal> {
    return this.http.get('/authentication/user')
      .map(response => {
          const data = response.json();
          return data.principal;
        }
      )
      .catch(
        (error) => {
          return Observable.throw(error);
        }
      );
  };

  register(user: User): Observable<User> {
    return this.httpUtil.request('/user-account', {
      method: RequestMethod.Post,
      body: user
    });
  }

  activateViaMail(id: number, mailActivationCode: string): Observable<User> {
    return this.httpUtil.request(`/user-account/${id}/mail-activation-code/${mailActivationCode}/activate`, {
      method: RequestMethod.Put
    });
  }

  activateViaMobile(id: number, mobileActivationCode: string): Observable<User> {
    return this.httpUtil.request(`/user-account/${id}/mobile-activation-code/${mobileActivationCode}/activate`, {
      method: RequestMethod.Put
    });
  }

  changePassword(id: number, oldPassword: string, newPassword: string): any {
    return this.httpUtil.request(`/user-account/${id}/password/change`, {
      method: RequestMethod.Put,
      body: {
        oldPassword: oldPassword,
        newPassword: newPassword
      }
    });
  }

  retrievePassword(username: string): any {
    return this.httpUtil.request(`/user-account/username/${username}/retrieve`, {
      method: RequestMethod.Post
    });
  }

  resetPassword(id: number, resetCode: string, newPassword: string): Observable<User> {
    return this.httpUtil.request(`/user-account/${id}/password/reset`, {
      method: RequestMethod.Put,
      body: {
        resetCode: resetCode,
        newPassword: newPassword
      }
    });
  }
}
