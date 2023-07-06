import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpUtil } from '@corelate/shared/utils';
import { Block } from '@corelate/shared/models';


@Injectable()
export class BlocksService {
  constructor(private httpUtil: HttpUtil) { }

  public get(): Observable<Block> {
    return this.httpUtil.request('/blocks', {
      method: RequestMethod.Get
    });
  }

  public save(blocks: Block): Observable<Block> {
    return this.httpUtil.request('/blocks', {
      method: RequestMethod.Put,
      body: blocks
    });
  }
}
