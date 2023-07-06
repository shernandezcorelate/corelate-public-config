import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Header } from '@corelate/shared/models';
import { DataTableUtil, HttpUtil } from '@corelate/shared/utils';


@Injectable()
export class HeaderService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public get(): Observable<Header> {
    return this.httpUtil.request('/header', {
      method: RequestMethod.Get
    });
  };

  public save(header: Header): Observable<Header> {
    return this.httpUtil.request('/header', {
      method: RequestMethod.Put,
      body: header
    });
  }

  public uploadImage(prefix: string, formData) {
    return this.httpUtil.request(`/header/upload/${prefix}`, {
      method: RequestMethod.Post,
      body: formData,
      noContentType: true
    });
  }
}
