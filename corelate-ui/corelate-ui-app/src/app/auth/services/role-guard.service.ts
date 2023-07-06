import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '@corelate/auth/services/auth.service';

import { Observable } from 'rxjs/Observable';
import { Principal } from '@corelate/shared/models';


@Injectable()
export class RoleGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // TODO: Roles must be retrieve from sessionStorage
    // const mockUserRoles = ['SUPER_ADMIN', 'ADMIN'];
    //
    // const roles = route.data['roles'] as Array<string>;
    //
    // if (roles.some(role => mockUserRoles.includes(role))) {
    //   return true;
    // } else {
    //   this.router.navigate(['/error', '403']);
    // }

    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

}
