import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { FaqService } from '@corelate/core/services';
import { DataTable, Faq, TableParams } from '@corelate/shared/models';


@Component({
  selector: 'corelate-ui-faqs-browse',
  host: { class: 'd-flex w-100 justify-content-start flex-column public-container'},
  templateUrl: './faq-browse.component.html',
  styleUrls: ['./faq-browse.component.scss']
})
export class FaqsComponent implements OnInit, OnDestroy {
  faqs: Faq[];
  params = new TableParams();
  destroy$: Subject<boolean> = new Subject<boolean>();
  loading = true;

  constructor(
    private faqService: FaqService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.params.size = 100;
    this.params.sort = 'createdDate';
    this.params.sortDirection = 'DESC';

    this.faqService.getPublished(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.faqs = pagedData.results;
          this.loading = false;
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
