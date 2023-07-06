import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GeneralContentService } from '@corelate/core/services';
import { DataTable, GeneralContent, TableParams } from '@corelate/shared/models';
import { environment as env } from 'environments/environment';

import { SweetAlertService } from 'ngx-sweetalert2';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'corelate-ui-gen-contents-single',
  host: { class: 'd-flex w-100 justify-content-start flex-column public-container'},
  templateUrl: './gen-contents-single.component.html',
  styleUrls: ['./gen-contents-single.component.scss']
})
export class GenContentsSingleComponent implements OnInit, OnDestroy {
  content: GeneralContent;
  destroy$: Subject<boolean> = new Subject<boolean>();

  public imageSourceUrl = env.imageSourceUrl;

  constructor(
    private contentService: GeneralContentService,
    private route: ActivatedRoute,
    private alert: SweetAlertService) { }

  ngOnInit() {
    this.route.params
      .switchMap(params => {
        if (params['id']) {
          return this.contentService.get(+params['id']);
        } else {
          this.alert.error({text: 'Content does not exist!'});
        }
      })
      .takeUntil(this.destroy$)
      .subscribe(
        (genContent: GeneralContent) => {
          this.content = genContent;
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
