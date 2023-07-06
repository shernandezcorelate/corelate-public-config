import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { Footer } from "@corelate/shared/models";
import { FooterService } from "@corelate/core/services";
import { AuthService } from '@corelate/auth/services';
import { environment as env } from 'environments/environment';


@Component({
  selector: 'corelate-ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  @Input() modal;
  public footer: Footer;
  public isLoggedIn = false;
  public atHome = false;
  public imageSourceUrl = env.imageSourceUrl;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private footerService: FooterService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.atHome = (this.router.url === '/');

    this.footerService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (footer: Footer) => this.footer = footer,
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
