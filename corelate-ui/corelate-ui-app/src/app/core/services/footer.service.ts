import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Footer } from '@corelate/shared/models';
import { DataTableUtil, HttpUtil } from '@corelate/shared/utils';

@Injectable()
export class FooterService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public get(): Observable<Footer> {
    return this.httpUtil.request('/footer', {
      method: RequestMethod.Get
    });
  };

  public save(footer: Footer): Observable<Footer> {
    return this.httpUtil.request('/footer', {
      method: RequestMethod.Put,
      body: footer
    });
  }

  public uploadImage(prefix: string, formData) {
    return this.httpUtil.request(`/footer/upload/${prefix}`, {
      method: RequestMethod.Post,
      body: formData,
      noContentType: true
    });
  }
}
