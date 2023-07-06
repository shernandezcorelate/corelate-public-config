import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Subject } from 'rxjs/Subject';

import { DataTableUtil, FilterParams, HttpUtil } from '@corelate/shared/utils';
import {DataTable, CartItem, CartPayment, TableParams} from '@corelate/shared/models';

@Injectable()
export class ShoppingCartService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public getAll(tablePrams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tablePrams, filters);
    return this.httpUtil.request('/item', {
      method: RequestMethod.Get,
      params: params
    })
  }

  public get(id: number): Observable<CartItem> {
    return this.httpUtil.request(`/item/${id}`, {
      method: RequestMethod.Get
    })
  }

  public save(item: CartItem): Observable<CartItem> {
    return this.httpUtil.request(`/item`, {
      method: RequestMethod.Post,
      body: item
    });
  }

  public delete(id: number): Observable<CartItem> {
    return this.httpUtil.request(`/item/${id}`, {
      method: RequestMethod.Delete
    });
  }

  public pay(payment: CartPayment): Observable<CartPayment> {
    return this.httpUtil.request(`/payment/pay`, {
      method: RequestMethod.Post,
      body: payment
    });
  }

  public getPayment(id: number): Observable<CartPayment> {
    return this.httpUtil.request(`/payment/${id}`, {
      method: RequestMethod.Get,
    })
  }

  public getAllPayment(tablePrams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tablePrams, filters);
    return this.httpUtil.request(`/payment`, {
      method: RequestMethod.Get,
      params: params
    })
  }
}
