import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { environment as env } from 'environments/environment';

export interface BuildInfo {
  git: {
    commit: {
      time: string,
      id: string
    },
    branch: string
  };
}

@Injectable()
export class AppInfoService {
  constructor(private http: HttpClient) {}

  public get(module?: string): Observable<BuildInfo> {
    let requestUrl = '';

    if (module) {
      requestUrl =  env.versionInfoUrl + `/api/${module}/info`;
    } else {
      requestUrl = env.versionInfoUrl + '/info';
    }
    return this.http.get<BuildInfo>(requestUrl);
  };
}
