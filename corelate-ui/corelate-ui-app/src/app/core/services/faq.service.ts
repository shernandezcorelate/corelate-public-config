import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Subject } from 'rxjs/Subject';

import { DataTableUtil, FilterParams, HttpUtil } from '@corelate/shared/utils';
import { DataTable, Faq, TableParams } from '@corelate/shared/models';


@Injectable()
export class FaqService {
  hideForm = new Subject<any>();

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public getAll(tableParams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tableParams, filters);
    return this.httpUtil.request('/faq', {
      method: RequestMethod.Get,
      params: params
    });
  }

  public getPublished(tableParams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tableParams, filters);
    return this.httpUtil.request('/faq/published', {
      method: RequestMethod.Get,
      params: params
    });
  }

  public get(id: number): Observable<Faq> {
    return this.httpUtil.request(`/faq/${id}`, {
      method: RequestMethod.Get
    });
  };

  public save(faq: Faq): Observable<Faq> {
    const id = faq.id || '';
    return this.httpUtil.request(`/faq/${id}`, {
      method: faq.id ? RequestMethod.Put : RequestMethod.Post,
      body: faq
    });
  }

  public publish(id: number): any {
    return this.httpUtil.request(`/faq/${id}/publish`, {
      method: RequestMethod.Put
    });
  }

  public unpublish(id: number): any {
    return this.httpUtil.request(`/faq/${id}/unpublish`, {
      method: RequestMethod.Put
    });
  }

  public delete(id: number): any {
    return this.httpUtil.request(`/faq/${id}`, {
      method: RequestMethod.Delete
    });
  }

  public toggleStatus(faq: Faq): any {
    faq.published = !faq.published;
    return this.httpUtil.request(`/faq/${faq.id}`, {
      method: RequestMethod.Put,
      body: faq
    });
  }
}
