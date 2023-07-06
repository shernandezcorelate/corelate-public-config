import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DataTable, TextTemplate, TableParams } from '@corelate/shared/models';
import { DataTableUtil, FilterParams, HttpUtil } from '@corelate/shared/utils';


@Injectable()
export class TextTemplateService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public getAll(tableParams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tableParams, filters);
    return this.httpUtil.request('/text-template', {
      method: RequestMethod.Get,
      params: params
    });
  }

  public get(id: number): Observable<TextTemplate> {
    return this.httpUtil.request(`/text-template/${id}`, {
      method: RequestMethod.Get
    });
  };

  public save(textTemplate: TextTemplate): Observable<TextTemplate> {
    const id = textTemplate.id || '';
    return this.httpUtil.request(`/text-template/${id}`, {
      method: textTemplate.id ? RequestMethod.Put : RequestMethod.Post,
      body: textTemplate
    });
  }

  public delete(id: number): any {
    return this.httpUtil.request(`/text-template/${id}`, {
      method: RequestMethod.Delete
    });
  }
}
