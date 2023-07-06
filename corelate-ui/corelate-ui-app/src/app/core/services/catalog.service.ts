import { Injectable } from '@angular/core';
import { Headers, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpUtil } from '@corelate/shared/utils';


declare var require: any;
const queryString = require('query-string');

@Injectable()
export class CatalogService {

  constructor(private httpUtil: HttpUtil) { }

  public getKeys(): Observable<any> {
    return this.httpUtil.request('/catalog/keys', {
      method: RequestMethod.Get
    });
  }

  public search(queryObject: Object): Observable<any> {
    const params = queryString.stringify(queryObject);

    return this.httpUtil.request(`/catalog?${params}`, {
      method: RequestMethod.Get
    });
  }

  public get(id: Number): Observable<any> {
    return this.httpUtil.request(`/catalog/${id}`, {
      method: RequestMethod.Get
    });
  }

  public add(catalog: Object): Observable<any> {
    return this.httpUtil.request(`/catalog`, {
      method: RequestMethod.Post,
      body: catalog
    });
  }

  public update(catalog: Object): Observable<any> {
    return this.httpUtil.request(`/catalog/${catalog['id']}`, {
      method: RequestMethod.Put,
      body: catalog
    });
  }

  public delete(id: Number): Observable<any> {
    return this.httpUtil.request(`/catalog/${id}`, {
      method: RequestMethod.Delete
    });
  }

  public deleteByKey(key: string): Observable<any> {
    return this.httpUtil.request(`/catalog/delete/${key}`, {
      method: RequestMethod.Delete
    })
  }

  public save(payload): Observable<any> {
    return this.httpUtil.request(`/catalog/save`, {
      method: RequestMethod.Post,
      body: payload
    });
  }

  public upload(payload): Observable<any> {
    const headers: Headers = new Headers();
//
    // headers.
    // headers.append('Content-Type', 'multipart/form-data');

    return this.httpUtil.request(`/catalog/upload`, {
      method: RequestMethod.Post,
      body: payload,
      noContentType: true
    });
  }

  /*public getHeaders(key: string): Observable<any> {
    return this.httpUtil.request(`/catalog/headers/${key}`, {
      method: RequestMethod.Get
    });
  }*/
 }
