import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GeneralContentService } from '@corelate/core/services';
import { DataTable, GeneralContent, TableParams } from '@corelate/shared/models';
import { environment as env } from 'environments/environment';

import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'corelate-ui-gen-contents-browse',
  host: { class: 'd-flex w-100 justify-content-start flex-column public-container'},
  templateUrl: './gen-contents-browse.component.html',
  styleUrls: ['./gen-contents-browse.component.scss']
})
export class GenContentsBrowseComponent implements OnInit, OnDestroy {
  contents: GeneralContent[];
  params = new TableParams();
  destroy$: Subject<boolean> = new Subject<boolean>();
  hasNextPage: boolean;
  loading = true;
  selectedCategory = '';

  public categories = [
    { value: '', label: 'All Posts' },
    { value: 'NEWS', label: 'News' },
    { value: 'ANNOUNCEMENTS', label: 'Announcements' },
    { value: 'ADVOCACIES', label: 'Advocacies' },
    { value: 'EVENTS', label: 'Events' }
  ];

  public imageSourceUrl = env.imageSourceUrl;

  constructor(
    private contentService: GeneralContentService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.params.size = 10;
    this.params.sort = 'createdDate';
    this.params.sortDirection = 'DESC';

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.selectedCategory = queryParams['category'] || '';
        this.loadContents(this.selectedCategory);
      }
    );
  }

  categoriesSelected(category) {
    this.selectedCategory = category.value;
    this.loadContents(category.value);
  }

  loadContents(category?: string) {
    this.contentService
      .getAll(this.params, {published: true, category: category || ''})
      .takeUntil(this.destroy$)
      .subscribe((pagedData: DataTable) => {
          this.contents = pagedData.results;
          this.hasNextPage = pagedData.hasNextPage;
          this.loading = false;
        }
      );
  }

  loadMore() {
    this.params.size += 10;
    this.loadContents();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
