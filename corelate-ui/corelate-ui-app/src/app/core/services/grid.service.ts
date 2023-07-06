import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Grid, DataTable, TableParams } from '@corelate/shared/models';
import { DataTableUtil, FilterParams, HttpUtil } from '@corelate/shared/utils';

@Injectable()
export class GridService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public get(): Observable<Grid> {
    return this.httpUtil.request(`/grid-layout`, {
      method: RequestMethod.Get
    });
  };

  public save(grid: Grid): Observable<Grid> {
    return this.httpUtil.request(`/grid-layout`, {
      method: RequestMethod.Put,
      body: grid
    });
  }

  public uploadGridItemImage(id: number, prefix: string, formData) {
    return this.httpUtil.request(`/grid-item/${id}/upload/${prefix}`, {
      method: RequestMethod.Post,
      body: formData,
      noContentType: true
    });
  }
}
