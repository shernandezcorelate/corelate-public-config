import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { PermissionGroup } from '@corelate/shared/models';
import { SweetAlertService } from 'ngx-sweetalert2';
import { PermissionService } from './permission.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'corelate-ui-permission',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.scss']
})
export class PermissionFormComponent implements OnInit , OnDestroy {
  permissionForm: FormGroup;
  permissionGroup: PermissionGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();
  retrieving: Subscription;
  saving: Subscription;

  constructor(private permissionService: PermissionService,
              private alert: SweetAlertService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params
      .switchMap(params => {
        if (params['id']) {
          return this.permissionService.getPermissionGroup(+params['id']);
        }
      })
      .takeUntil(this.destroy$)
      .map(response => {
        this.permissionForm = this.formBuilder.group({
          permissions: this.formBuilder.array([
            this.initPermission()
          ])
        });
        this.permissionGroup = response;
        if (response.permissions && response.permissions.length > 0) {
          this.removePermission(0);
          for (const permission of response.permissions) {
            this.addPermission(permission.action);
          }
        }
        return this.permissionForm;
      })
      .subscribe(
        (form) => {
          this.permissionForm = form;
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/admin/permission']);
        }
      );
  }

  initPermission(value?: string) {
    return this.formBuilder.group({
      action: [value || '', Validators.required]
    });
  }

  addPermission(value?: string) {
    const control = <FormArray>this.permissionForm.controls['permissions'];
    control.push(this.initPermission(value || ''));
  }

  removePermission(i: number) {
    const control = <FormArray>this.permissionForm.controls['permissions'];
    control.removeAt(i);
  }

  onSave(permissions, isValid: boolean) {
    const actions = [];
    for (const permission of permissions.permissions) {
      actions.push(permission.action);
    }
    this.saving =
      this.permissionService.savePermissionGroupActions(this.permissionGroup.id, actions)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.router.navigate(['/admin/permission']);
          this.alert.swal({
            title: 'Module Permissions',
            html: '<strong>' + this.permissionGroup.module + '</strong> permissions has been saved.',
            timer: 1500,
            type: 'success',
            showConfirmButton: false
          }).catch(function () {});
        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
