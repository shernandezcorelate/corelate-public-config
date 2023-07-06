import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { GeneralContentService } from '@corelate/core/services';
import { GeneralContent } from '@corelate/shared/models';
import { environment as env } from 'environments/environment';


@Component({
  selector: 'corelate-ui-content-form',
  templateUrl: './general-content-form.component.html',
  styleUrls: ['./general-content-form.component.scss']
})
export class GeneralContentFormComponent implements OnInit , OnDestroy {
  @Input() id;
  @Input() modal;
  @Output() onModalSave: EventEmitter<any> = new EventEmitter();
  @Output() onModalCancel: EventEmitter<any> = new EventEmitter();

  public contentForm: FormGroup;
  public file: File = new File([""], "");
  public contentGetSubs: Subscription;
  public contentSaveSubs: Subscription;
  public contentSaveImageSubs: Subscription;
  public document = document;
  public paramId: number;
  public categories = [
    { value: 'NEWS', label: 'News' },
    { value: 'ANNOUNCEMENTS', label: 'Announcements' },
    { value: 'ADVOCACIES', label: 'Advocacies' },
    { value: 'EVENTS', label: 'Events' }
  ];
  public url;
  public reader;
  public imageSourceUrl = env.imageSourceUrl;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
      private contentService: GeneralContentService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private alert: SweetAlertService
  ) { }

  ngOnInit() {
    if (this.modal) {
      if (this.id) {
        this.contentGetSubs = this.getContents(this.id);
      } else {
        this.contentForm = this.createEmptyForm();
      }
    } else {
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.paramId = params['id'];
          this.contentGetSubs = this.getContents(params['id']);
        } else {
          this.contentForm = this.createEmptyForm();
        }
      });
    }
  }

  createEmptyForm() {
    return this.contentForm = this.formBuilder.group({
      id: [null],
      category: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      excerpt: ['', [Validators.required, Validators.maxLength(200)]],
      file: [''],
      published: [true, Validators.required]
    });
  }

  getContents(id) {
    return this.contentService.get(id)
      .takeUntil(this.destroy$)
      .subscribe(
        (content) => {
          this.contentForm = this.formBuilder.group({
            id: [content.id],
            category: [content.category, Validators.required],
            title: [content.title, Validators.required],
            content: [content.content, Validators.required],
            excerpt: [content.excerpt, [Validators.required, Validators.maxLength(200)]],
            file: [content.file],
            published: [content.published, Validators.required]
          });
        },
        (error) => console.log(error)
      );
  }

  onSave(content: GeneralContent, isValid: boolean) {
    this.contentSaveSubs = this.contentService.save(content)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          if (this.file.name) {
            let formData: FormData = new FormData();
            formData.append('file', this.file, this.file.name);

            this.contentSaveImageSubs = this.contentService.uploadImage(response.id, 'prefix', formData)
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
    this.alert.success({ text: 'Article has been saved.', timer: 1500,
    showConfirmButton: false }).catch(function () {});
    if (this.modal) {
      this.onModalSave.emit();
    } else {
      this.router.navigate(['/admin/general-content']);
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
      this.onModalCancel.emit()
    } else {
      this.router.navigate(['/admin/general-content']);
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
