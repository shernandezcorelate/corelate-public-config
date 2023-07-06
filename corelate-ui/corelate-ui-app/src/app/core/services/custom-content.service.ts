import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DataTableUtil, FilterParams, HttpUtil } from '@corelate/shared/utils';
import { DataTable, CustomContent, TableParams } from '@corelate/shared/models';


@Injectable()
export class CustomContentService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public get(): Observable<CustomContent> {
    return this.httpUtil.request(`/simple-layout`, {
      method: RequestMethod.Get
    });
  };

  public save(customContent: CustomContent): Observable<CustomContent> {
    return this.httpUtil.request(`/simple-layout`, {
      method: RequestMethod.Put,
      body: customContent
    });
  }
}
