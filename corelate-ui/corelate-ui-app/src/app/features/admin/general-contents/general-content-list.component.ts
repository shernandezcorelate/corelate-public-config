import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { SweetAlertService } from 'ngx-sweetalert2';

import { GeneralContentService } from '@corelate/core/services';
import { DataTable, TableParams, GeneralContent } from '@corelate/shared/models';


@Component({
  selector: 'corelate-ui-general-content-list',
  templateUrl: './general-content-list.component.html',
  styleUrls: ['./general-content-list.component.scss']
})
export class GeneralContentListComponent implements OnInit, OnDestroy {
  @Input() modal;

  public contents: GeneralContent[];
  public loading: boolean;
  public selectedId;
  public showForm = false;

  private params = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private contentService: GeneralContentService,
    private router: Router,
    private alert: SweetAlertService
  ) {}

  ngOnInit() {
    this.contents = [];
    this.setPage({ offset: 0 });
  }

  getPermissions(): void {
    this.contentService.getAll(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.contents = pagedData.results;
          this.params.page = pagedData.currentPage;
          this.params.totalElements = pagedData.totalElements;
          this.loading = false;
        },
        (error) => console.log(error)
      );
  }

  setPage(pageInfo) {
    this.loading = true;
    this.params.page = pageInfo.offset;
    this.getPermissions();
  }

  edit(id) {
    if (this.modal) {
      this.selectedId = id;
      this.showForm = true;
    } else {
      if (id) {
        this.router.navigate([`/admin/general-content/edit/${id}`]);
      } else {
        this.router.navigate(['/admin/general-content/add']);
      }
    }
  }

  publish(id: number) {
    this.contentService.publish(id)
      .subscribe(
      (generalContent) => {
        this.ngOnInit();
        this.alert.success({ text: 'Content Item has been PUBLISHED.', timer: 1500,
        showConfirmButton: false });
      },
      (error) => console.log(error)
    );
  }

  unpublish(id: number) {
    this.contentService.unpublish(id)
      .subscribe(
        (response) => {
          this.ngOnInit();
          this.alert.success({ text: 'Content Item has been UNPUBLISHED.', timer: 1500,
          showConfirmButton: false }).catch(function () {});
        },
        (error) => console.log(error)
      );
  }

  delete(generalContent: GeneralContent) {
    this.alert.confirm({
      text: 'Are you sure you want to delete this content?',
      confirmButtonClass: 'btn light-green darken-2 waves-effect waves-light',
      cancelButtonClass: 'btn btn-outline-blue-grey',
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then(() => {
        this.contentService.delete(generalContent.id)
          .subscribe(
            (response) => {
              this.ngOnInit();
              this.alert.success({ text: 'Content Item has been DELETED.', timer: 1500,
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
