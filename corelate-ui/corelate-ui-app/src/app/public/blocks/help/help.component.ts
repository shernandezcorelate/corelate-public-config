import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { HelpService } from '@corelate/core/services';
import { AuthService } from "@corelate/auth/services";
import { DataTable, TableParams, HelpTopic } from '@corelate/shared/models';
import { BlockTemplate } from '@corelate/shared/enums';
import { HelpListComponent } from '@corelate/features/admin/help/help-list.component';

@Component({
  selector: 'corelate-ui-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit, OnDestroy {
  @Input() layout;
  @ViewChild(HelpListComponent)
  public helpListComponent: HelpListComponent;

  public BlockTemplate = BlockTemplate;
  public helpTopics: HelpTopic[];
  public isLoggedIn = false;

  public loading = true;
  private params = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private helpService: HelpService,
    private authService: AuthService
  ) {
    this.helpTopics = [];
  }

  ngOnInit() {
    this.params.size = 5;
    this.params.sort = 'createdDate';
    this.params.sortDirection = 'DESC';

    this.isLoggedIn = this.authService.isAuthenticated();
    this.helpService.getPublished(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.helpTopics = pagedData.results;
          this.params.page = pagedData.currentPage;
          this.params.totalElements = pagedData.totalElements;
          this.loading = false;
        },
        (error) => console.log(error)
      );
  }

  onShowModal() {
    this.helpListComponent.ngOnInit();
  }

  onHideModal() {
    this.helpListComponent.cancelModal();
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
