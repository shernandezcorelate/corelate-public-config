import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { SweetAlertService } from 'ngx-sweetalert2';

import { HelpService } from '@corelate/core/services';
import { DataTable, HelpTopic, TableParams } from '@corelate/shared/models';


@Component({
  selector: 'corelate-ui-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.scss']
})
export class HelpListComponent implements OnInit, OnDestroy {
  @Input() modal;

  public helpTopics: HelpTopic[];
  public loading: boolean;
  public selectedId;
  public showForm = false;

  private params = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private helpService: HelpService,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.helpTopics = [];
    this.setPage({ offset: 0 });
  }

  getHelpTopics(): void {
    this.helpService.getAll(this.params)
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

  setPage(pageInfo) {
    this.loading = true;
    this.params.page = pageInfo.offset;
    this.getHelpTopics();
  }

  edit(id) {
    if (this.modal) {
      this.selectedId = id;
      this.showForm = true;
    } else {
      if (id) {
        this.router.navigate([`/admin/online-help/edit/${id}`]);
      } else {
        this.router.navigate(['/admin/online-help/add']);
      }
    }
  }

  unpublish(id: number) {
    this.helpService.unpublish(id)
      .subscribe(
        () => {
          this.ngOnInit();
          this.alert.success({ text: 'Help Item has been UNPUBLISHED.', timer: 1500,
          showConfirmButton: false }).catch(function () {});
        },
        (error) => console.log(error)
      );
  }

  publish(id: number) {
    this.helpService.publish(id)
      .subscribe(
      () => {
        this.ngOnInit();
        this.alert.success({ text: 'Help Item has been PUBLISHED.' });
      },
      (error) => console.log(error)
    );
  }

  delete(helpTopic: HelpTopic) {
    this.alert.confirm({
      text: 'Are you sure you want to delete this Help entry?',
      confirmButtonClass: 'btn light-green darken-2 waves-effect waves-light',
      cancelButtonClass: 'btn btn-outline-blue-grey',
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then(() => {
      this.helpService.delete(helpTopic.id)
        .subscribe(
          (response: HelpTopic) => {
            this.ngOnInit();
            this.alert.success({ text: 'Help Item has been DELETED.', timer: 1500,
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
