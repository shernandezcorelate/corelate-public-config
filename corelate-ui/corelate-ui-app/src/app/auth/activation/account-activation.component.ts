import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { AuthService } from '@corelate/auth/services';
import { SweetAlertService } from 'ngx-sweetalert2';


@Component({
  selector: 'corelate-ui-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.scss']
})
export class AccountActivationComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  id: number;
  activationCode: string;
  username: string;

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private alert: SweetAlertService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.username = queryParams['username'];
        this.activationCode = queryParams['activationCode'];
      }
    );
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
      });
  }

  onActivate(form) {
    this.authService.activateViaMail(this.id, form.activationCode)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.router.navigate(['/']);
          this.alert.success({
            title: 'Account Activation',
            text: 'Your account has been successfully activated.'
          });
        },
        (error) => {
          this.alert.error({text: 'An error has occurred. Contact the administrator.'});
          console.log(error);
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
