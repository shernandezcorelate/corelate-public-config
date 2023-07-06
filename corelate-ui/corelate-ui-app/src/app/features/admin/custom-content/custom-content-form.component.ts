import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { CustomContentService } from '@corelate/core/services';
import { CustomContent } from '@corelate/shared/models';


@Component({
  selector: 'corelate-ui-custom-content-form',
  templateUrl: './custom-content-form.component.html',
  styleUrls: ['./custom-content-form.component.scss']
})
export class CustomContentFormComponent implements OnInit , OnDestroy  {
  @Input() modal;
  @Output() onModalSave: EventEmitter<any> = new EventEmitter();
  @Output() onModalCancel: EventEmitter<any> = new EventEmitter();

  public customContentForm: FormGroup;
  public contentGetSubs: Subscription;
  public contentSaveSubs: Subscription;
  public paramId: number;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private customContentService: CustomContentService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.contentGetSubs = this.getContents();
  }

  getContents() {
    return this.customContentService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (customContent) => {
          this.customContentForm = this.formBuilder.group({
            heading: [customContent.heading, Validators.required],
            content: [customContent.content, Validators.required]
          });
        },
        (error) => console.log(error)
      );
  }

  onSave(customContent: CustomContent, isValid: boolean) {
    this.contentSaveSubs = this.customContentService.save(customContent)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.alert.success({ text: 'Content has been saved.', timer: 1500,
          showConfirmButton: false }).catch(function () {});
          if (this.modal) {
            this.onModalSave.emit();
          } else {
            this.router.navigate(['/admin/custom-content']);
          }
        },
        (error) => console.log(error)
      );
  }

  cancel() {
    if (this.modal) {
      this.onModalCancel.emit()
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
