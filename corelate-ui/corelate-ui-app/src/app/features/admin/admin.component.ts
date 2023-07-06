import { Component } from '@angular/core';
import { AuthService } from '@corelate/auth/services';
import { Subject } from 'rxjs/Subject';

import { Footer } from "@corelate/shared/models";
import { FooterService } from "@corelate/core/services";
import { environment as env } from 'environments/environment';

@Component({
  selector: 'corelate-ui-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  public footer: Footer;
  public imageSourceUrl = env.imageSourceUrl;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private authService: AuthService,
    private footerService: FooterService
  ) { }

  ngOnInit() {
    this.footerService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (footer: Footer) => this.footer = footer,
        (error) => console.log(error)
      );
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
