import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subject } from 'rxjs/Subject';

import { PermissionService } from '@corelate/features/admin/permission/permission.service';
import { DataTable, PermissionGroup, TableParams } from '@corelate/shared/models';
import { SweetAlertService } from 'ngx-sweetalert2';


@Component({
  selector: 'corelate-ui-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit, OnDestroy {
  @ViewChild('permissionGroupModal') permissionGroupModal;
  @ViewChild('deleteModuleModal') deleteModuleModal;
  @ViewChild('permissionGroupForm') permissionGroupForm: NgForm;
  permissionGroups: PermissionGroup[];
  permissionGroupId: number;
  permissionGroup: PermissionGroup;
  params = new TableParams();
  loading: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private permissionService: PermissionService,
              private alert: SweetAlertService) {}

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  getAllPermissions(): void {
    this.permissionService.getAllPermissionGroups(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.permissionGroups = pagedData.results;
          this.params.page = pagedData.currentPage;
          this.params.totalElements = pagedData.totalElements;
          this.loading = false;
        },
        (error) => console.log(error)
      );
  }

  savePermissionGroup(permissionGroup: PermissionGroup): void {
    permissionGroup.id = this.permissionGroupId;
    this.permissionService.savePermissionGroup(permissionGroup)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.getAllPermissions();
          this.permissionGroupModal.hide();
          this.alert.swal({
            title: 'Module Permissions',
            html: '<strong>' + permissionGroup.module + '</strong> module has been saved.',
            timer: 1500,
            type: 'success',
            showConfirmButton: false
          }).catch(function () {});
        },
        (error) => console.log(error)
      );
  }

  setPage(pageInfo) {
    this.loading = true;
    this.params.page = pageInfo.offset;
    this.getAllPermissions();
  }

  addModule(): void {
    this.permissionGroupForm.setValue({
      module: '',
      description: ''
    });
    this.permissionGroupModal.show();
  }

  editModule(id: number): void {
    this.permissionService.getPermissionGroup(id)
      .takeUntil(this.destroy$)
      .subscribe(
        (permission: PermissionGroup) => {
          this.permissionGroupId = permission.id;
          this.permissionGroupForm.setValue({
            module: permission.module,
            description: permission.description
          });
          this.permissionGroupModal.show();
        },
        (error) => console.log(error)
      );
  }

  confirmDeleteModule(permissionGroup: PermissionGroup): void {
    this.permissionGroup = permissionGroup;
    this.deleteModuleModal.show();
  }

  deleteModule(id: number): void {
    this.permissionService.deletePermissionGroup(id)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.getAllPermissions();
          this.deleteModuleModal.hide();
        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
