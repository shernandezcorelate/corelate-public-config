import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DataTableUtil, HttpUtil } from '@corelate/shared/utils';
import { DataTable, Permission, PermissionGroup, TableParams } from '@corelate/shared/models';


@Injectable()
export class PermissionService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public getAllPermissionGroups(tableParams: TableParams): Observable<DataTable> {
    return this.httpUtil.request('/permission-group', {
      method: RequestMethod.Get,
      params: this.dataTableUtil.buildParams(tableParams)
    });
  }

  public getPermissionGroup(id: number): Observable<PermissionGroup> {
    return this.httpUtil.request(`/permission-group/${id}`, {
      method: RequestMethod.Get
    });
  };

  public savePermissionGroup(permission: PermissionGroup): Observable<PermissionGroup> {
    const id = permission.id || '';
    return this.httpUtil.request(`/permission-group/${id}`, {
      method: permission.id ? RequestMethod.Put : RequestMethod.Post,
      body: permission
    });
  }

  public deletePermissionGroup(id: number): any {
    return this.httpUtil.request(`/permission-group/${id}`, {
      method: RequestMethod.Delete
    });
  }

  public getAllActions(tableParams: TableParams): Observable<DataTable> {
    return this.httpUtil.request('/permission', {
      method: RequestMethod.Get,
      params: this.dataTableUtil.buildParams(tableParams)
    });
  }

  public getAction(id: number): Observable<Permission> {
    return this.httpUtil.request(`/permission/${id}`, {
      method: RequestMethod.Get
    });
  };

  public saveAction(permission: Permission): Observable<Permission> {
    const id = permission.id || '';
    return this.httpUtil.request(`/permission/${id}`, {
      method: permission.id ? RequestMethod.Put : RequestMethod.Post,
      body: permission
    });
  }

  public deleteAction(id: number): any {
    return this.httpUtil.request(`/permission/${id}`, {
      method: RequestMethod.Delete
    });
  }

  public savePermissionGroupActions(id: number, actions: string[]): Observable<Permission> {
    return this.httpUtil.request(`/permission-group/${id}/permissions/actions`, {
      method: RequestMethod.Post,
      body: actions
    });
  }
}
