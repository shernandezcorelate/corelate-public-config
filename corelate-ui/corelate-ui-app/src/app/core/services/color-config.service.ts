import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ColorConfig } from '@corelate/shared/models';
import { DataTableUtil, HttpUtil } from '@corelate/shared/utils';


@Injectable()
export class ColorConfigService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public get(): Observable<ColorConfig> {
    return this.httpUtil.request('/color-config', {
      method: RequestMethod.Get
    });
  };

  public save(colorConfig: ColorConfig): Observable<ColorConfig> {
    return this.httpUtil.request('/color-config', {
      method: RequestMethod.Put,
      body: colorConfig
    });
  }
}
