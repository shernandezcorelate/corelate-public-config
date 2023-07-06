import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ContactForm, DataTable, TableParams } from '@corelate/shared/models';
import { DataTableUtil, HttpUtil, FilterParams } from '@corelate/shared/utils';


@Injectable()
export class ContactFormService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public getAll(tablePrams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tablePrams, filters);
    return this.httpUtil.request('/contact-form', {
      method: RequestMethod.Get,
      params: params
    });
  };

  public send(contactForm: ContactForm): Observable<ContactForm> {
    return this.httpUtil.request('/contact-form', {
      method: RequestMethod.Post,
      body: contactForm
    });
  }

}
