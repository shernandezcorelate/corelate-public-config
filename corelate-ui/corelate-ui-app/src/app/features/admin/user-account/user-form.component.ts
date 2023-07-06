import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@corelate/core/services';

import { GroupService } from '@corelate/features/admin/group/group.service';
import { PermissionService } from '@corelate/features/admin/permission/permission.service';
import { SweetAlertService } from 'ngx-sweetalert2';
import { DataTable, Group, PermissionGroup, TableParams, User } from '@corelate/shared/models';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'corelate-ui-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserFormComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  groups: Group[];
  permissionGroups: PermissionGroup[];
  selectedGroups: Group[];
  permissionIds: number[] = [];
  autoSelectPermissionIds: number[] = [];
  manualSelectedPermissionIds: number[] = [];
  params = new TableParams();
  userId: number;
  destroy$: Subject<boolean> = new Subject<boolean>();
  retrieving: Subscription;
  saving: Subscription;

  constructor(private groupService: GroupService,
              private permissionService: PermissionService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private alert: SweetAlertService) {
  }

  ngOnInit() {

    // Show All Groups for Selection
    this.params.size = 100;
    this.groupService.getAll(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.groups = pagedData.results;
        },
        (error) => console.log(error)
      );

    // Show All Permissions by Module for Selection
    this.params.size = 100;
    this.permissionService.getAllPermissionGroups(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.permissionGroups = pagedData.results;
        },
        (error) => console.log(error)
      );

    // Init User
    if (this.route.snapshot.params['id']) {
      this.route.params
        .takeUntil(this.destroy$)
        .switchMap(params => {
          return this.userService.get(+params['id']);
        })
        .map((user: User) => {

          // Preset Groups and Permissions
          this.selectedGroups = user.groups;
          this.permissionIds = user.permissions.map((permission) => { return permission.id; });

          return this.buildUserForm(user);
        })
        .subscribe((form) => {
            this.userForm = form;
          },
          (error) => {
            console.log(error);
            this.router.navigate(['/admin/user']);
          }
        );
    } else {
      this.userForm  = this.buildUserForm();
    }
  }

  buildUserForm(user?: User): FormGroup {
    if (user) {
      this.userId = user.id;
      if (!user.name) {
        user.name = {
          prefix: '',
          givenName: '',
          middleName: '',
          familyName: '',
          suffix: '',
          degree: ''
        };
      }

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
    }

    return this.formBuilder.group({
      username: [user ? user.username : '', [Validators.required, Validators.email]],
      mobileNumber: [user ? user.mobileNumber : ''],
      name: this.formBuilder.group({
        prefix: [user ? user.name.prefix : null],
        givenName: [user ? user.name.givenName : '', [Validators.required]],
        middleName: [user ? user.name.middleName : ''],
        familyName: [user ? user.name.familyName : '', [Validators.required]],
        suffix: [user ? user.name.suffix : null],
        degree: [user ? user.name.degree : null]
      }),
      address: this.formBuilder.group({
        address: [user ? user.address.address : '', [Validators.required]],
        address2: [user ? user.address.address2 : ''],
        province: [user ? user.address.province : '', [Validators.required]],
        city: [user ? user.address.city : '', [Validators.required]],
        country: [user ? user.address.country : '', [Validators.required]],
        countryName: [user ? user.address.countryName : ''],
        zipCode: [user ? user.address.zipCode : '']
      })
    });
  }

  onSave(user: User, isValid: boolean) {
    user.id = this.userId;
    this.saving =
      this.userService.save(user)
      .takeUntil(this.destroy$)
      .switchMap(
        (response: User) => {
          const groupIds = this.selectedGroups.map((group) => { return group.id; });
          return this.userService.addGroups(response.id, groupIds);
        }
      )
      .switchMap(
        (response: User) => {
          for (const permissionId of this.manualSelectedPermissionIds) {
            const i = this.permissionIds.indexOf(permissionId);
            if (i === -1) {
              this.permissionIds.push(permissionId);
            }
          }
          return this.userService.addPermissions(response.id, this.permissionIds);
        }
      )
      .subscribe(
        (response: User) => {
          this.router.navigate(['/admin/user']);
          this.alert.swal({
            title: 'User Account',
            html: '<strong>' + response.username + '</strong> account has been saved.',
            timer: 1500,
            type: 'success',
            showConfirmButton: false
          }).catch(function () {});
        },
        (error) => console.log(error)
      );
  }

  updatePermissions() {
    const selectedGroupIds = new Set(this.selectedGroups.map((group) => { return group.id; }));
    const unselectedGroups = this.groups.filter(x => !selectedGroupIds.has(x.id));

    // Uncheck Permissions
    for (const group of unselectedGroups) {
      for (const permission of group.permissions) {
        this.unSetPermissionId(permission.id, this.permissionIds);
      }
    }
    // Autocheck Permissions
    for (const group of this.selectedGroups) {
      for (const permission of group.permissions) {
        this.setPermissionId(permission.id, this.permissionIds);
      }
    }

    // Retain manually selected permissions
    for (const permissionId of this.manualSelectedPermissionIds) {
      this.setPermissionId(permissionId, this.permissionIds);
    }
    this.manualSelectedPermissionIds = [];
  }

  togglePermission(id: number, checked, ids: number[]): void {
    if (checked) {
      this.setPermissionId(id, ids);
      this.setPermissionId(id, this.permissionIds);
    } else {

      this.unSetPermissionId(id, ids);
      this.unSetPermissionId(id, this.permissionIds);
    }
  }

  setPermissionId(id: number, ids: number[]): void {
    const i = ids.indexOf(id);
    if (i === -1) {
      ids.push(id);
    }
  }

  unSetPermissionId(id: number, ids: number[]): void {
    const i = ids.indexOf(id);
    if (i !== -1) {
      ids.splice(i, 1);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
