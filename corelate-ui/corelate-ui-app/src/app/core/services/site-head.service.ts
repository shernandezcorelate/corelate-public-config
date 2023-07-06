import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { SiteHead } from '@corelate/shared/models';
import { DataTableUtil, HttpUtil } from '@corelate/shared/utils';

@Injectable()
export class SiteHeadService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public get(): Observable<SiteHead> {
    return this.httpUtil.request('/site-head', {
      method: RequestMethod.Get
    });
  };

  public save(siteHead: SiteHead): Observable<SiteHead> {
    return this.httpUtil.request('/site-head', {
      method: RequestMethod.Put,
      body: siteHead
    });
  }

  public uploadImage(prefix: string, formData) {
    return this.httpUtil.request(`/site-head/upload/${prefix}`, {
      method: RequestMethod.Post,
      body: formData,
      noContentType: true
    });
  }
}
