import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@corelate/auth/services';

import { Subject } from 'rxjs/Subject';

import { UserService } from '@corelate/core/services';
import { SweetAlertService } from 'ngx-sweetalert2';
import { Principal, User } from '@corelate/shared/models';

import { Footer } from "@corelate/shared/models";
import { FooterService } from "@corelate/core/services";


@Component({
  selector: 'corelate-ui-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user: User;
  userId: number;
  userProfileForm: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();

  public editable = false;
  public footer: Footer;

  constructor(private authService: AuthService, private userService: UserService,
              private formBuilder: FormBuilder, private router: Router, private alert: SweetAlertService,
              private footerService: FooterService) {}

  ngOnInit() {
    // TODO: Use Resolver instead
    this.authService.getPrincipalUser()
      .takeUntil(this.destroy$)
      .switchMap((principal: Principal) => {
        return this.userService.get(principal.id);
      })
      .map((user: User) => {
        this.user = user;
        this.userId = user.id;

        if (!user.address) {
          user.address = {
            address: '',
            address2: '',
            province: '',
            city: '',
            country: '',
            countryName: '',
            zipCode: ''
          };
        }

        return this.formBuilder.group({
          username: [user.username, [Validators.required]],
          mobileNumber: [user.mobileNumber],
          name: this.formBuilder.group({
            prefix: [user.name.prefix],
            givenName: [user.name.givenName, [Validators.required]],
            middleName: [user.name.middleName],
            familyName: [user.name.familyName, [Validators.required]],
            suffix: [user.name.suffix],
            degree: [user.name.degree]
          }),
          address: this.formBuilder.group({
            address: [user.address.address, [Validators.required]],
            address2: [user.address.address2],
            province: [user.address.province, [Validators.required]],
            city: [user.address.city, [Validators.required]],
            country: [user.address.country, [Validators.required]],
            countryName: [user.address.countryName],
            zipCode: [user.address.zipCode]
          })
        });
      })
      .subscribe((form) => {
        this.userProfileForm = form;
      },
      (error) => console.log(error)
      );

    this.footerService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (footer: Footer) => this.footer = footer,
        (error) => console.log(error)
      );
  }

  onSave(user: User, isValid: boolean) {
    user.id = this.userId;
    this.userService.save(user)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.alert.swal({
            title: 'Your profile has been updated.',
            timer: 1500,
            type: 'success',
            showConfirmButton: false
          }).catch(function () {});
          this.editable = false;
          this.ngOnInit();
        },
        (error) => console.log(error)
      );
  }

  logout() {
    this.authService.logout();
  }

  edit() {
    this.editable = true;
  }

  cancel() {
    this.editable = false;

    this.userProfileForm = this.formBuilder.group({
      username: [this.user.username, [Validators.required]],
      mobileNumber: [this.user.mobileNumber],
      name: this.formBuilder.group({
        prefix: [this.user.name.prefix],
        givenName: [this.user.name.givenName, [Validators.required]],
        middleName: [this.user.name.middleName],
        familyName: [this.user.name.familyName, [Validators.required]],
        suffix: [this.user.name.suffix],
        degree: [this.user.name.degree]
      }),
      address: this.formBuilder.group({
        address: [this.user.address.address, [Validators.required]],
        address2: [this.user.address.address2],
        province: [this.user.address.province, [Validators.required]],
        city: [this.user.address.city, [Validators.required]],
        country: [this.user.address.country, [Validators.required]],
        countryName: [this.user.address.countryName],
        zipCode: [this.user.address.zipCode]
      })
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
