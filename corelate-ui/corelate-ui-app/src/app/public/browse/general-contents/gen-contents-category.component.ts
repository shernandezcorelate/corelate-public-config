import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GeneralContentService } from '@corelate/core/services';
import { DataTable, GeneralContent, TableParams } from '@corelate/shared/models';
import { environment as env } from 'environments/environment';

import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'corelate-ui-gen-contents-category',
  host: { class: 'd-flex w-100 justify-content-start flex-column public-container'},
  templateUrl: './gen-contents-category.component.html',
  styleUrls: ['./gen-contents-category.component.scss']
})
export class GenContentsCategoryComponent implements OnInit, OnDestroy {
  category = '';
  contents: GeneralContent[];
  params = new TableParams();
  destroy$: Subject<boolean> = new Subject<boolean>();

  public imageSourceUrl = env.imageSourceUrl;

  constructor(
    private contentService: GeneralContentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.params.size = 10;
    this.params.sortDirection = 'DESC';
    this.route.params
      .switchMap(params => {
        if (params['category']) {
          this.category = params['category'].toUpperCase();
          return this.contentService.getAll(this.params, {published: true, deleted: false, category: this.category});
        } else {
          return this.contentService.getAll(this.params, {published: true, deleted: false});
        }
      })
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.contents = pagedData.results;
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  categoriesSelected(category) {
    this.router.navigate(['/contents/browse', category.value.toLocaleLowerCase()]);
  }
}
