import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DataTable, GeneralContent, TableParams } from '@corelate/shared/models';
import { DataTableUtil, FilterParams, HttpUtil } from '@corelate/shared/utils';


@Injectable()
export class GeneralContentService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public getAll(tableParams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tableParams, filters);
    return this.httpUtil.request('/general-content', {
      method: RequestMethod.Get,
      params: params
    });
  }

  public getPublished(tableParams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tableParams, filters);
    return this.httpUtil.request('/general-content/published', {
      method: RequestMethod.Get,
      params: params
    });
  }

  public get(id: number): Observable<GeneralContent> {
    return this.httpUtil.request(`/general-content/${id}`, {
      method: RequestMethod.Get
    });
  };

  public save(generalContent: GeneralContent): Observable<GeneralContent> {
    const id = generalContent.id || '';
    return this.httpUtil.request(`/general-content/${id}`, {
      method: generalContent.id ? RequestMethod.Put : RequestMethod.Post,
      body: generalContent
    });
  }

  public delete(id: number): any {
    return this.httpUtil.request(`/general-content/${id}`, {
      method: RequestMethod.Delete
    });
  }

  public publish(id: number): any {
    return this.httpUtil.request(`/general-content/${id}/publish`, {
      method: RequestMethod.Put
    });
  }

  public unpublish(id: number): any {
    return this.httpUtil.request(`/general-content/${id}/unpublish`, {
      method: RequestMethod.Put
    });
  }

  public toggleStatus(generalContent: GeneralContent): any {
    generalContent.published = !generalContent.published;
    return this.httpUtil.request(`/general-content/${generalContent.id}`, {
      method: RequestMethod.Put,
      body: generalContent
    });
  }

  public uploadImage(id: number, prefix: string, formData) {
    return this.httpUtil.request(`/general-content/${id}/upload/${prefix}`, {
      method: RequestMethod.Post,
      body: formData,
      noContentType: true
    });
  }
}
