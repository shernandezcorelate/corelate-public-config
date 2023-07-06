import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs/Subject';

import { AuthService } from '@corelate/auth/services';
import { SweetAlertService } from 'ngx-sweetalert2';

import { User } from '@corelate/shared/models';
import { PasswordValidator } from '../../shared/validators/password.validator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'corelate-ui-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  registrationForm: FormGroup;
  submitted = false;
  userSub: Subscription;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private alert: SweetAlertService) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]], // TODO: async validation for existing email
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      name: this.formBuilder.group({
        givenName: ['', [Validators.required]],
        familyName: ['', [Validators.required]]
      })
    }, {
      validator: PasswordValidator.MatchPassword
    });
  }

  onRegister(user: User, isValid: boolean) {
    this.submitted = true;
    this.userSub = this.authService.register(user)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.router.navigate(['/']);
          this.alert.success({
            title: 'Registration Successful',
            text: 'An email has been sent to confirm your registration.'
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
