import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '@corelate/auth/services/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getAccessToken()}`
      }
    });

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // Logger
        const elapsed = Date.now() - started;
        console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
      }
    }, (error: any) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401 || error.status === 403) {
          this.router.navigate(['/login']);
        }
        return this.handleError(error);
      }
    });
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
