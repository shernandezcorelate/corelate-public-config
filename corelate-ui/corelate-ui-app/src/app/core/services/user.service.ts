import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { DataTable, TableParams, User } from '@corelate/shared/models';
import { DataTableUtil, FilterParams, HttpUtil } from '@corelate/shared/utils';


@Injectable()
export class UserService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public getAll(tableParams: TableParams, filters?: FilterParams): Observable<DataTable> {
    return this.httpUtil.request('/user-account', {
      method: RequestMethod.Get,
      params: this.dataTableUtil.buildParams(tableParams, filters)
    });
  }

  public get(id: number): Observable<User> {
    return this.httpUtil.request(`/user-account/${id}`, {
      method: RequestMethod.Get
    });
  };

  public save(user: User): Observable<User> {
    const id = user.id || '';
    return this.httpUtil.request(`/user-account/${id}`, {
      method: user.id ? RequestMethod.Put : RequestMethod.Post,
      body: user
    });
  }

  public delete(id: number): any {
    return this.httpUtil.request(`/user-account/${id}`, {
      method: RequestMethod.Delete
    });
  }

  public addGroups(id: number, groupIds: number | number[]): Observable<User> {
    if (groupIds instanceof Array) {
      return this.httpUtil.request(`/user-account/${id}/groups`, {
        method: RequestMethod.Post,
        body: groupIds
      });
    } else {
      return this.httpUtil.request(`/user-account/${id}/groups/${groupIds}`, {
        method: RequestMethod.Post
      });
    }
  }

  public addPermissions(id: number, permissionIds: number | number[]): Observable<User> {
    if (permissionIds instanceof Array) {
      return this.httpUtil.request(`/user-account/${id}/permissions`, {
        method: RequestMethod.Post,
        body: permissionIds
      });
    } else {
      return this.httpUtil.request(`/user-account/${id}/permissions/${permissionIds}`, {
        method: RequestMethod.Post
      });
    }
  }

  public removeGroups(id: number, groupIds: number | number[]): any {
    if (groupIds instanceof Array) {
      return this.httpUtil.request(`/user-account/${id}/groups`, {
        method: RequestMethod.Delete,
        body: groupIds
      });
    } else {
      return this.httpUtil.request(`/user-account/${id}/groups/${groupIds}`, {
        method: RequestMethod.Delete
      });
    }
  }
}
