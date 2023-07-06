import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@corelate/auth/services';
import { GeneralContentService } from '@corelate/core/services';

import { GeneralContentListComponent } from '@corelate/features/admin/general-contents/general-content-list.component';
import { BlockTemplate } from '@corelate/shared/enums';

import { DataTable, GeneralContent, TableParams } from '@corelate/shared/models';
import { FilterParams } from '@corelate/shared/utils';
import { environment as env } from 'environments/environment';

import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'corelate-ui-general-content',
  templateUrl: './general-content.component.html',
  styleUrls: ['./general-content.component.scss']
})
export class GeneralContentComponent implements OnInit, OnDestroy {
  @Input() layout;
  @Input() content;
  @ViewChild(GeneralContentListComponent)
  private generalContentListComponent: GeneralContentListComponent;

  public generalContents: GeneralContent[];
  public BlockTemplate = BlockTemplate;
  public isLoggedIn = false;

  public params = new TableParams();
  public filterParams: FilterParams = {};
  public imageSourceUrl = env.imageSourceUrl;
  public loading = true;
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private contentService: GeneralContentService,
    private authService: AuthService
  ) {
    this.filterParams.deleted = false;
    this.filterParams.published = true;
    this.params.sort = 'createdDate';
    this.params.sortDirection = 'DESC';
    this.generalContents = [];
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.filterParams.category = this.content;
    this.params.size = (this.layout === BlockTemplate.ONE_COLUMN ? 3 : 2);

    this.contentService.getAll(this.params, this.filterParams)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.loading = false;
          this.generalContents = pagedData.results;
        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onShowModal() {
    this.generalContentListComponent.ngOnInit();
  }

  onHideModal() {
    this.ngOnInit();
  }
}
