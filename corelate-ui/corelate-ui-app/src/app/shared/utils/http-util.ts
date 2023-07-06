import { Injectable } from '@angular/core';
import { Headers, Http, RequestMethod, Response } from '@angular/http';
import { OAuthService } from 'angular-oauth2-oidc-hybrid';

import { Observable } from 'rxjs/Observable';

import { environment as env } from 'environments/environment';

@Injectable()
export class HttpUtil {
  constructor(private http: Http, private oauthService: OAuthService) { }

  /**
   * method?: string | RequestMethod | null;
   * params?: string | URLSearchParams | {[key: string]: any | any[];} | null;
   * headers?: Headers | null;
   * body?: any;
   * withCredentials?: boolean | null;
   * responseType?: ResponseContentType | null;
   * */
  request(url: string, options: any): Observable<any> {
    const headers: Headers = options.headers || new Headers();
    let resourceHeader = '';

    // Temporary solution for non-dev environment, will be implemented soon in HttpInterceptor.
    const userEndPoints = [
      '/user-account',
      '/permission',
      '/permission-group',
      '/group'
    ];
    const cmsEndPoints =  [
      '/header',
      '/faq',
      '/carousel',
      '/general-content',
      '/help-topic',
      '/footer',
      '/text-template',
      '/contact-info',
      '/contact-form',
      '/simple-layout',
      '/blocks',
      '/grid-layout',
      '/grid-item',
      '/color-config',
      '/inbox',
      '/site-head'
    ];
    const catalogEndPoints = ['/catalog'];

    const shoppingCartEndPoints = [
      '/item',
      '/payment'
    ];

    const rulesEngineEndPoints = [
      '/suggestions',
      '/rules'
    ];

    if (env.proxyUrl) {
      if (userEndPoints.find(endpoint => url.startsWith(endpoint))) {
        resourceHeader = '/user';
      } else if (cmsEndPoints.find(endpoint => url.startsWith(endpoint))) {
        resourceHeader = '/cms';
      } else if (catalogEndPoints.find(endpoint => url.startsWith(endpoint))) {
        resourceHeader = '/catalog';
      } else if (shoppingCartEndPoints.find(endpoint => url.startsWith(endpoint))) {
        resourceHeader = '/shopping-cart';
      } else if (rulesEngineEndPoints.find(endpoint => url.startsWith(endpoint))) {
        resourceHeader = '/rules';
      }
    }

    // Attach authorization header for non CMS services and CMS services except GET method
    if ( this.oauthService.getAccessToken() !== null && ( !cmsEndPoints.find(endpoint => url.startsWith(endpoint)) ||
        (options.method !== RequestMethod.Get && cmsEndPoints.find(endpoint => url.startsWith(endpoint))) ||
        (options.method === RequestMethod.Get && url === '/contact-form')) ) {
        headers.append('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
    }

    if (!options.noContentType) {
      headers.append('Content-Type', 'application/json');
    }

    let fullUrl = env.proxyUrl + resourceHeader + url;
    // workaround for bpmn proxy
    if (options.bpmn) {
      fullUrl = env.activiti.bpmnUrl + url;
    }

    options.headers = headers;

    // TODO: Use HttpClient
    return this.http.request(fullUrl, options)
      .map(
        (response: Response) => {
          var contentType = response.headers.get('content-type');

          let data = response['_body'] ? response.text() : null;

          if(contentType && contentType.indexOf('application/json') !== -1) {
            data = response['_body'] ? response.json() : null;
          }

          return data;
        }
      )
      .catch(
        (error: Response) => {
          // temporary solution for expired token, interceptor will handle this soon.
          const _error = error['_body'] ? error.json() : null;
          if (_error !== null && _error.error === 'invalid_token') {
            this.oauthService.initImplicitFlow();
          }
          return this.handleError(error);
        }
      );
  }

  private handleError(error: any): Observable<any> {
    let errorMessage: string;

    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'object') {
      errorMessage = error.json();
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    return Observable.throw(errorMessage || 'Something went wrong');
  }
}
