import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {DataTable, Rule, TableParams} from '@corelate/shared/models';
import { DataTableUtil, FilterParams, HttpUtil } from '@corelate/shared/utils';

@Injectable()
export class RulesEngineService {

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public getAll(tablePrams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tablePrams, filters);
    return this.httpUtil.request(`/rules`, {
      method: RequestMethod.Get,
      params: params
    })
  }

  public get(id: number): Observable<Rule> {
    return this.httpUtil.request(`/rules/${id}`, {
      method: RequestMethod.Get,
    })
  }

  public save(rule: Rule): Observable<Rule> {
    return this.httpUtil.request(`/rules`, {
      method: RequestMethod.Post,
      body: rule
    });
  }

  public uploadRules(formData) {
    return this.httpUtil.request(`/rules/upload`, {
      method: RequestMethod.Post,
      body: formData,
      noContentType: true
    });
  }

  public downloadRuleFile(uid: string): Observable<any> {
    return this.httpUtil.request(`/rules/download/${uid}`, {
      method: RequestMethod.Get,
      noContentType: true
    });
  }
}
