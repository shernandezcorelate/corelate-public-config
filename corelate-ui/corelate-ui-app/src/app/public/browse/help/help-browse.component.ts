import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HelpService } from '@corelate/core/services';
import { DataTable, HelpTopic, TableParams } from '@corelate/shared/models';

import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'corelate-ui-help-browse',
  templateUrl: './help-browse.component.html',
  styleUrls: ['./help-browse.component.scss'],
  host: {
    class: 'd-flex w-100 justify-content-start flex-column public-container'
  }
})
export class HelpBrowseComponent implements OnInit, OnDestroy {
  helpTopics: HelpTopic[];
  params = new TableParams();
  destroy$: Subject<boolean> = new Subject<boolean>();
  loading = true;

  private id: number;

  constructor(
    private helpService: HelpService
  ) {}

  ngOnInit() {
    this.params.size = 100;
    this.params.sort = 'createdDate';
    this.params.sortDirection = 'DESC';

    this.helpService.getPublished(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.helpTopics = pagedData.results;
          this.loading = false;
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
