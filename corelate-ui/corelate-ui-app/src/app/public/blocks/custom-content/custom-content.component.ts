import { Component, OnDestroy, OnInit, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { CustomContent, DataTable, TableParams } from '@corelate/shared/models';
import { BlockTemplate } from '@corelate/shared/enums';
import { AuthService } from "@corelate/auth/services";
import { CustomContentService }  from '@corelate/core/services';
import { CustomContentFormComponent } from '@corelate/features/admin/custom-content/custom-content-form.component';

@Component({
  selector: 'corelate-ui-custom-content',
  templateUrl: './custom-content.component.html'
})
export class CustomContentComponent implements OnInit, OnDestroy {
  @Input() layout;

  @ViewChild(CustomContentFormComponent)
  private customContentForm: CustomContentFormComponent;

  public BlockTemplate = BlockTemplate;
  public isLoggedIn = false;
  public customContent: CustomContent;

  public loading = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private authService: AuthService,
    private customContentService: CustomContentService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.customContentService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (result) => {
          this.customContent = result;
          this.loading = false;
        },(error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onShowModal() {
    this.customContentForm.ngOnInit();
  }

  initModal() {
    this.ngOnInit();
  }
}
