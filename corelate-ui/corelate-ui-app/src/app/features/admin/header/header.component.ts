import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { Header } from '@corelate/shared/models';
import { HeaderService } from '@corelate/core/services';
import { environment as env } from 'environments/environment';


@Component({
  selector: 'corelate-ui-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnDestroy {
  @Input() modal;
  public headerForm: FormGroup;
  public file: File = new File([""], "");
  public document = document;
  public currentTemplate;
  public currentTemplateChanged;
  public selectedTemplate;
  public headerGetSubs: Subscription;
  public headerSaveSubs: Subscription;
  public url;
  public reader;
  public imageSourceUrl = env.imageSourceUrl;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private headerService: HeaderService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.headerGetSubs = this.headerService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (header: Header) => {
          this.headerForm = this.formBuilder.group({
            label: [header.label],
            subLabel: [header.subLabel],
            file: [header.file],
            showImage: [header.showImage],
            showLabel: [header.showLabel]
          });

          if (header.showImage && header.showLabel) {
            this.currentTemplate = 'LOGO_AND_TEXT';
          } else if (header.showImage && !header.showLabel) {
            this.currentTemplate = 'LOGO';

            this.headerForm.controls['label'].disable();
            this.headerForm.controls['subLabel'].disable();
          }
        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSave(header: Header, isValid: boolean) {
    this.headerSaveSubs = this.headerService.save(header)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          if (this.file.name) {
            let formData:FormData = new FormData();
            formData.append('file', this.file, this.file.name);

            this.headerSaveSubs = this.headerService.uploadImage('prefix', formData)
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
    this.alert.success({ text: 'Header has been updated.', timer: 1500,
    showConfirmButton: false }).catch(function () {});
    if (this.modal) {
      this.modal.hide();
    } else {
      this.router.navigate(['/admin']);
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

  cancel() {
    if (this.modal) {
      this.modal.hide();
    } else {
      this.router.navigate(['/admin']);
    }
  }

  withFile(): boolean {
    if(this.file.name !== null && this.file.name !== '') {
      return true;
    } else if(this.headerForm.get('file').value !== null && this.headerForm.get('file').value !== '') {
      return true;
    }
    return false;
  }

  selectTemplate(template) {
    this.selectedTemplate = template;
    this.currentTemplateChanged = (template !== this.currentTemplate) ? true : false;

    if (template === 'LOGO_AND_TEXT') {
      this.headerForm.controls['label'].enable();
      this.headerForm.controls['subLabel'].enable();

      this.headerForm.patchValue({
        showImage: true,
        showLabel: true,
      });
    } else if (template === 'LOGO') {
      this.headerForm.controls['label'].disable();
      this.headerForm.controls['subLabel'].disable();

      this.headerForm.patchValue({
        showImage: true,
        showLabel: false,
      });
    }
  }
}
