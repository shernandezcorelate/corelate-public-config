import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { GroupService } from '@corelate/features/admin/group/group.service';
import { PermissionService } from '@corelate/features/admin/permission/permission.service';
import { DataTable, Group, PermissionGroup, TableParams } from '@corelate/shared/models';
import { SweetAlertService } from 'ngx-sweetalert2';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'corelate-ui-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit, OnDestroy {
  @ViewChild('groupForm') groupForm: NgForm;
  permissionGroups: PermissionGroup[];
  permissionIds: number[] = [];
  groupId: number;
  params = new TableParams();
  destroy$: Subject<boolean> = new Subject<boolean>();
  retrieving: Subscription;
  saving: Subscription;

  constructor(private groupService: GroupService,
              private permissionService: PermissionService,
              private router: Router,
              private route: ActivatedRoute,
              private alert: SweetAlertService) {}

  ngOnInit() {

    // Show All Permission Groups for Selection
    this.params.size = 100;
    this.permissionService.getAllPermissionGroups(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.permissionGroups = pagedData.results;
        },
        (error) => console.log(error)
      );

    // Edit Group and Set permissionIds
    if (this.route.snapshot.params['id']) {
      this.route.params
        .takeUntil(this.destroy$)
        .switchMap(params => {
          if (params['id']) {
            return this.groupService.get(+params['id']);
          }
        })
        .subscribe((group: Group) => {
            this.groupId = group.id;
            for (const permission of group.permissions) {
              this.setGroupId(permission.id);
            }
            this.groupForm.setValue({
              name: group.name,
              description: group.description
            });
          },
          (error) => {
            console.log(error);
            this.router.navigate(['/admin/group']);
          }
        );
    }
  }

  saveGroup(group: Group): void {
    group.id = this.groupId;
    this.saving = this.groupService.save(group)
      .takeUntil(this.destroy$)
      .switchMap(
        (group: Group) => {
          return this.groupService.addPermissions(group.id, this.permissionIds);
        }
      )
      .subscribe(
        (group: Group) => {
          this.router.navigate(['/admin/group']);
          this.alert.swal({
            title: 'User Group',
            html: '<strong>' + group.name + '</strong> group has been saved.',
            timer: 1500,
            type: 'success',
            showConfirmButton: false
          }).catch(function () {});
        },
        (error) => console.log(error)
      );
  }

  toggleGroup(id: number, checked): void {
    this.permissionService.getPermissionGroup(id)
      .subscribe((group: PermissionGroup) => {
        if (checked) {
          for (const permission of group.permissions) {
            this.setGroupId(permission.id);
          }
        } else {
          for (const permission of group.permissions) {
            this.unSetGroupId(permission.id);
          }
        }
      },
      (error) => console.log(error)
      );
  }

  togglePermission(id: number, checked): void {
    if (checked) {
      this.setGroupId(id);
    } else {

      this.unSetGroupId(id);
    }
  }

  setGroupId(id: number): void {
    const i = this.permissionIds.indexOf(id);
    if (i === -1) {
      this.permissionIds.push(id);
    }
  }

  unSetGroupId(id: number): void {
    const i = this.permissionIds.indexOf(id);
    if (i !== -1) {
      this.permissionIds.splice(i, 1);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
