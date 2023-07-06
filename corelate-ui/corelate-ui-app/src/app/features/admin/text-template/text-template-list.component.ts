import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { SweetAlertService } from 'ngx-sweetalert2';

import { TextTemplateService } from '@corelate/core/services';
import { DataTable, TextTemplate, TableParams } from '@corelate/shared/models';

@Component({
  selector: 'corelate-ui-text-template-list',
  templateUrl: './text-template-list.component.html',
  styleUrls: ['./text-template-list.component.scss']
})
export class TextTemplateListComponent implements OnInit, OnDestroy {
  textTemplates: TextTemplate[];
  params = new TableParams();
  loading: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  public templatePreview: string;

  public templateMap: Map<string, string> = new Map([
    ["USER_PASSWORD_RETRIEVE_TEMPLATE", "User Password Retrieve"],
    ["USER_PASSWORD_MAIL_TEMPLATE", "User Password Mail"],
    ["USER_PASSWORD_SMS_TEMPLATE", "User Password SMS"],
    ["USER_PASSWORD_RESET_MAIL_TEMPLATE", "User Password Reset Mail"],
    ["USER_PASSWORD_RESET_SMS_TEMPLATE", "User Password Reset SMS"],
    ["USER_PASSWORD_FORGOT_TEMPLATE", "User Password Forgot"],
    ["ACTIVATION_MAIL_TEMPLATE", "Activation Mail"],
    ["ACTIVATION_SMS_TEMPLATE", "Activation SMS"],
    ["ACTIVATION_MAIL_SUCCESS_TEMPLATE", "Activation Mail Success"],
    ["ACTIVATION_SMS_SUCCESS_TEMPLATE", "Activation SMS Success"],
  ]);

  constructor(
    private textTemplateService: TextTemplateService,
    private router: Router,
    private alert: SweetAlertService
  ) {}

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  getTextTemplates(): void {
    this.textTemplateService.getAll(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.textTemplates = pagedData.results;
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
    this.getTextTemplates();
  }

  edit(id) {
    this.router.navigate([`/admin/text-template/edit/${id}`]);
  }

  delete(id: number) {
    this.alert.confirm({
      text: 'Are you sure you want to delete this template?',
      confirmButtonClass: 'btn light-green darken-2 waves-effect waves-light',
      cancelButtonClass: 'btn btn-outline-blue-grey',
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then(() => {
        this.textTemplateService.delete(id)
          .subscribe(
            (response) => {
              this.ngOnInit();
              this.alert.success({ text: 'Email Template has been DELETED.', timer: 1500,
                showConfirmButton: false }).catch(function () {});
            },
            (error) => console.log(error)
          );
      },
      () => {}
    );
  }

  preview(template: string) {
    this.templatePreview = template;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
