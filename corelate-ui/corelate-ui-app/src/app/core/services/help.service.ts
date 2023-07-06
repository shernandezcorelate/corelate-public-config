import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DataTable, HelpTopic, TableParams } from '@corelate/shared/models';
import { DataTableUtil, FilterParams, HttpUtil } from '@corelate/shared/utils';


@Injectable()
export class HelpService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {
  }

  public getAll(tableParams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tableParams, filters);
    return this.httpUtil.request('/help-topic', {
      method: RequestMethod.Get,
      params: params
    });
  }

  public get(id: number): Observable<HelpTopic> {
    return this.httpUtil.request(`/help-topic/${id}`, {
      method: RequestMethod.Get
    });
  }

  public getPublished(tableParams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tableParams, filters);
    return this.httpUtil.request('/help-topic/published', {
      method: RequestMethod.Get,
      params: params
    });
  }

  public save(helpTopic: HelpTopic): Observable<HelpTopic> {
    const id = helpTopic.id || '';
    return this.httpUtil.request(`/help-topic/${id}`, {
      method: helpTopic.id ? RequestMethod.Put : RequestMethod.Post,
      body: helpTopic
    });
  }

  public delete(id: number): any {
    return this.httpUtil.request(`/help-topic/${id}`, {
      method: RequestMethod.Delete
    });
  }

  public publish(id: number): any {
    return this.httpUtil.request(`/help-topic/${id}/publish`, {
      method: RequestMethod.Put
    });
  }

  public unpublish(id: number): any {
    return this.httpUtil.request(`/help-topic/${id}/unpublish`, {
      method: RequestMethod.Put
    });
  }
}
