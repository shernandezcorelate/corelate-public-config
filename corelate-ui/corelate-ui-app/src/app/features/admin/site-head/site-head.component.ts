import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { SiteHead } from '@corelate/shared/models';
import { SiteHeadService } from '@corelate/core/services';
import { environment as env } from 'environments/environment';


@Component({
  selector: 'corelate-ui-admin-site-head',
  templateUrl: './site-head.component.html',
  styleUrls: ['./site-head.component.scss']
})
export class SiteHeadComponent implements OnInit , OnDestroy {
  @Input() modal;
  public siteHeadForm: FormGroup;
  public file: File = new File([""], "");
  public document = document;
  public siteHeadGetSubs: Subscription;
  public siteHeadSaveSubs: Subscription;
  public url;
  public reader;
  public imageSourceUrl = env.imageSourceUrl;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private siteHeadService: SiteHeadService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.siteHeadGetSubs = this.siteHeadService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (siteHead: SiteHead) => {
          this.siteHeadForm = this.formBuilder.group({
            title: [siteHead.title],
            file: [siteHead.file]
          });

        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSave(siteHead: SiteHead, isValid: boolean) {
    this.siteHeadSaveSubs = this.siteHeadService.save(siteHead)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          if (this.file.name) {
            let formData:FormData = new FormData();
            formData.append('file', this.file, this.file.name);

            this.siteHeadSaveSubs = this.siteHeadService.uploadImage('prefix', formData)
              .subscribe(
                (response) => {
                  this.successCallback();
                },
                (error) => console.log(error)
              );
          } else {
            this.successCallback();
          }
        },
        (error) => console.log(error)
      );
  }

  successCallback() {
    this.alert.success({ text: 'Site Head has been updated.', timer: 1500,
      showConfirmButton: false }).catch(function () {});
    if (this.modal) {
      this.modal.hide();
    } else {
      this.router.navigate(['/admin/site-head']);
    }
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;

    if(fileList.length > 0) {
      this.file = fileList[0];
      this.reader = new FileReader();
      this.reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      this.reader.readAsDataURL(event.target.files[0]);
    }
  }

  withFile(): boolean {
    if(this.file.name !== null && this.file.name !== '') {
      return true;
    } else if(this.siteHeadForm.get('file').value !== null && this.siteHeadForm.get('file').value !== '') {
      return true;
    }
    return false;
  }
}
