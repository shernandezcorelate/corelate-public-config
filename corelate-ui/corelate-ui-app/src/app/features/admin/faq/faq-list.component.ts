import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { SweetAlertService } from 'ngx-sweetalert2';

import { DataTable, Faq, TableParams } from '@corelate/shared/models';
import { FaqService } from '@corelate/core/services';


@Component({
  selector: 'corelate-ui-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit, OnDestroy {
  @Input() modal;

  public faqs: Faq[];
  public loading: boolean;
  public selectedId;
  public showForm = false;

  private params = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private faqService: FaqService,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.faqs = [];
    this.setPage({ offset: 0 });
  }

  getFaqs(): void {
    this.params.sort = 'updatedDate';
    this.params.sortDirection = 'DESC';

    this.faqService.getAll(this.params)
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
  };

  setPage(pageInfo) {
    this.loading = true;
    this.params.page = pageInfo.offset;
    this.getFaqs();
  }

  edit(id) {
    if (this.modal) {
      this.selectedId = id;
      this.showForm = true;
    } else {
      if (id) {
        this.router.navigate([`/admin/faq/edit/${id}`]);
      } else {
        this.router.navigate(['/admin/faq/add']);
      }
    }
  }

  publish(id: number) {
    this.faqService.publish(id)
      .subscribe(
      (faq: Faq) => {
        this.ngOnInit();
        this.alert.success({ text: 'FAQ Item has been PUBLISHED.', timer: 1500,
        showConfirmButton: false }).catch(function () {});
      },
      (error) => console.log(error)
    );
  }

  unpublish(id: number) {
    this.faqService.unpublish(id)
      .subscribe(
      (faq: Faq) => {
        this.ngOnInit();
        this.alert.success({ text: 'FAQ Item has been UNPUBLISHED.', timer: 1500,
        showConfirmButton: false }).catch(function () {});
      },
      (error) => console.log(error)
    );
  }

  delete(faq: Faq) {
    this.alert.confirm({
      text: 'Are you sure you want to delete this FAQ entry?',
      confirmButtonClass: 'btn light-green darken-2 waves-effect waves-light',
      cancelButtonClass: 'btn btn-outline-blue-grey',
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then(() => {
      this.faqService.delete(faq.id)
        .subscribe(
          (response: Faq) => {
            this.ngOnInit();
            this.alert.success({ text: 'FAQ Item has been DELETED.', timer: 1500,
            showConfirmButton: false }).catch(function () {});
          },
          (error) => console.log(error)
        );
      },
      () => {}
    );
  }

  saveModal($event) {
    this.showForm = false;
    this.ngOnInit();
  }

  cancelModal() {
    this.showForm = false;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
