import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import {MaterialModule, MdCheckboxModule} from '@angular/material';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { ContactFormService } from '@corelate/core/services';
import { DataTable, ContactForm, TableParams } from '@corelate/shared/models';

@Component({
  selector: 'corelate-ui-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, OnDestroy {
  public messages: ContactForm[];
  public loading: boolean;

  public params = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private contactFormService: ContactFormService,
    private router: Router
  ) {}

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  getMessages(): void {
    this.contactFormService.getAll(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pageData: DataTable) => {
          this.messages = pageData.results;
          this.params.page = pageData.currentPage;
          this.params.totalElements = pageData.totalElements;
          this.loading = false;
        },
        (error) => console.log(error)
      );
  }

  setPage(pageInfo) {
    this.loading = true;
    this.params.page = pageInfo.offset;
    this.getMessages();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
