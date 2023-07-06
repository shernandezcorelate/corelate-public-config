import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { AuthService } from '@corelate/auth/services';
import { HeaderService } from '@corelate/core/services';
import { Header, Principal } from '@corelate/shared/models';
import { environment as env } from 'environments/environment';


@Component({
  selector: 'corelate-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() modal;

  public header: Header;
  imageSourceUrl = env.imageSourceUrl;

  id: number;
  isLoggedIn = false;
  atHome = false;
  principal: Principal;
  principalId = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();
  destroyHeader$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private authService: AuthService,
    private headerService: HeaderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.atHome = (this.router.url === '/');

    if (this.isLoggedIn) {
      this.authService.getPrincipalUser()
        .takeUntil(this.destroy$)
        .subscribe(
          (principal: Principal) => {
            this.principal = principal;
            this.principalId = principal.id;
          },
          (error) => {
            this.isLoggedIn = false;
            this.principal = null;
          }
        );
    }
    this.headerService.get()
      .takeUntil(this.destroyHeader$)
      .subscribe(
        (header: Header) => this.header = header,
        (error) => console.log(error)
      );
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.isLoggedIn) {
      this.destroy$.next(true);
      this.destroy$.complete();
    }

    this.destroyHeader$.next(true);
    this.destroyHeader$.complete();
  }

}
