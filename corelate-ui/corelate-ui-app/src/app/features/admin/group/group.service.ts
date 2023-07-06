import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DataTable, Group, TableParams } from '../../../shared/models';
import { DataTableUtil, HttpUtil } from '../../../shared/utils';

@Injectable()
export class GroupService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public getAll(tableParams: TableParams): Observable<DataTable> {
    return this.httpUtil.request('/group', {
      method: RequestMethod.Get,
      params: this.dataTableUtil.buildParams(tableParams)
    });
  }

  public get(id: number): Observable<Group> {
    return this.httpUtil.request(`/group/${id}`, {
      method: RequestMethod.Get
    });
  };

  public save(group: Group): Observable<Group> {
    const id = group.id || '';
    return this.httpUtil.request(`/group/${id}`, {
      method: group.id ? RequestMethod.Put : RequestMethod.Post,
      body: group
    });
  }

  public delete(id: number): any {
    return this.httpUtil.request(`/group/${id}`, {
      method: RequestMethod.Delete
    });
  }

  public addPermissions(id: number, permissionIds: number | number[]): Observable<Group> {
    if (permissionIds instanceof Array) {
      return this.httpUtil.request(`/group/${id}/permissions`, {
        method: RequestMethod.Post,
        body: permissionIds
      });
    } else {
      return this.httpUtil.request(`/group/${id}/permissions/${permissionIds}`, {
        method: RequestMethod.Post
      });
    }
  }

  public removePermissions(id: number, permissionIds: number | number[]): any {
    if (permissionIds instanceof Array) {
      return this.httpUtil.request(`/group/${id}/permissions`, {
        method: RequestMethod.Delete,
        body: permissionIds
      });
    } else {
      return this.httpUtil.request(`/group/${id}/permissions/${permissionIds}`, {
        method: RequestMethod.Delete
      });
    }
  }
}
