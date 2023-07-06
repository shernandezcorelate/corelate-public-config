import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { ContactInfo } from '@corelate/shared/models';
import { ContactInfoService } from '@corelate/core/services';


@Component({
  selector: 'corelate-ui-admin-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit , OnDestroy {
  @Input() modal;
  public contactInfoForm: FormGroup;
  public contactInfoGetSubs: Subscription;
  public contactInfoSaveSubs: Subscription;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private contactInfoService: ContactInfoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.contactInfoGetSubs = this.getContactInfo();
  }

  getContactInfo() {
    return this.contactInfoService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (contactInfo) => {
          const detailFGs = contactInfo.contactDetails.map(detail => {
            return this.formBuilder.group({
              contactType: [detail.contactType, Validators.required],
              contactDetails: [detail.contactDetails, Validators.required]
            });
          });

          this.contactInfoForm = this.formBuilder.group({
            address: [contactInfo.address, Validators.required],
            contactDetails: this.formBuilder.array(detailFGs),
            latitude: [contactInfo.latitude, Validators.required],
            longitude: [contactInfo.longitude, Validators.required]
          });
        },
        (error) => console.log(error)
      );
  }

  onSave(contactInfo: ContactInfo, isValid: boolean) {
    this.contactInfoSaveSubs = this.contactInfoService.save(contactInfo)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.alert.success({text: 'Contact Info has been saved.', timer: 1500,
          showConfirmButton: false }).catch(function () {});
          if (this.modal) {
            this.modal.hide();
          }
        },
        (error) => console.log(error)
      );
  }

  addContactDetails() {
    this.contactDetails.push(this.formBuilder.group({
      contactType: ['', Validators.required],
      contactDetails: ['', Validators.required]
    }));
  }

  cancel() {
    if (this.modal) {
      this.modal.hide();
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  deleteDetails(index) {
    this.contactDetails.removeAt(index);
  }

  get contactDetails(): FormArray {
    return this.contactInfoForm.get('contactDetails') as FormArray;
  }
}
