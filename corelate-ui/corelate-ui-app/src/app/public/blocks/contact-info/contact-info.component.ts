import { Component, OnDestroy, OnInit, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';

import { BlockTemplate } from '@corelate/shared/enums';
import { AuthService } from "@corelate/auth/services";

import { ContactInfo }         from '@corelate/shared/models';
import { ContactInfoService }  from '@corelate/core/services';
import { ContactInfoComponent as ContactInfoAdminComponent } from '@corelate/features/admin/contact-info/contact-info.component';

@Component({
  selector: 'corelate-ui-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit, OnDestroy {
  @Input() layout;

  @ViewChild(ContactInfoAdminComponent)
  private contactInfoAdminComponent: ContactInfoAdminComponent;

  public BlockTemplate = BlockTemplate;
  public isLoggedIn = false;
  public contactInfo: ContactInfo;

  public loading = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private authService: AuthService,
    private contactInfoService: ContactInfoService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();

    this.contactInfoService.get()
      .takeUntil(this.destroy$)
      .map(contactInfo => {
        contactInfo.latitude = +contactInfo.latitude;
        contactInfo.longitude = +contactInfo.longitude;

        return contactInfo;
      })
      .subscribe(
        (contactInfo: ContactInfo) => {
          this.contactInfo = contactInfo;
          this.loading = false;
        },(error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onShowModal() {
    this.contactInfoAdminComponent.ngOnInit();
  }

  onHideModal() {
    this.ngOnInit();
  }
}
