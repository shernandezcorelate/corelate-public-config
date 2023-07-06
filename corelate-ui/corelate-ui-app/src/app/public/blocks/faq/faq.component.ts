import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { FaqService } from '@corelate/core/services';
import { AuthService } from "@corelate/auth/services";
import { DataTable, Faq, TableParams } from '@corelate/shared/models';
import { BlockTemplate } from '@corelate/shared/enums';
import { FaqListComponent } from '@corelate/features/admin/faq/faq-list.component';


@Component({
  selector: 'corelate-ui-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, OnDestroy {
  @Input() layout;
  @ViewChild(FaqListComponent)
  public faqListComponent: FaqListComponent;

  public BlockTemplate = BlockTemplate;
  public faqs: Faq[];
  public isLoggedIn = false;

  public loading = true;
  private params = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private faqService: FaqService,
    private authService: AuthService) {
    this.faqs = [];
  }

  ngOnInit() {
    this.params.size = 5;
    this.params.sort = 'createdDate';
    this.params.sortDirection = 'DESC';

    this.isLoggedIn = this.authService.isAuthenticated();
    this.getFaqs();
  }

  getFaqs(): void {
    this.faqService.getPublished(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
      (pagedData: DataTable) => {
        this.faqs = pagedData.results;
        this.params.page = pagedData.currentPage;
        this.params.totalElements = pagedData.totalElements;
        this.loading = false;
      },
      (error) => console.log(error)
    );
  }

  onShowModal() {
    this.faqListComponent.ngOnInit();
  }

  onHideModal() {
    this.faqListComponent.cancelModal();
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
