import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import {ContactInfo, ContactForm, DataTable} from '@corelate/shared/models';
import { HttpUtil } from '@corelate/shared/utils';


@Injectable()
export class ContactInfoService {

  constructor(private httpUtil: HttpUtil) {}

  public get(): Observable<ContactInfo> {
    return this.httpUtil.request('/contact-info', {
      method: RequestMethod.Get
    });
  };

  public save(contactInfo: ContactInfo): Observable<ContactInfo> {
    return this.httpUtil.request('/contact-info', {
      method: RequestMethod.Put,
      body: contactInfo
    });
  }
}
