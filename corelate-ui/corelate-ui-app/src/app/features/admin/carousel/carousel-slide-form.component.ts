import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CarouselService } from '@corelate/core/services';
import { CarouselSlide } from '@corelate/shared/models';
import { environment as env } from 'environments/environment';
import { SweetAlertService } from 'ngx-sweetalert2';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'corelate-ui-carousel-slide-form',
  templateUrl: './carousel-slide-form.component.html',
  styleUrls: ['./carousel-slide-form.component.scss']
})
export class CarouselSlideFormComponent implements OnInit , OnDestroy {
  @Input() id;
  @Input() modal;
  @Output() onModalSave: EventEmitter<any> = new EventEmitter();
  @Output() onModalCancel: EventEmitter<any> = new EventEmitter();

  public carouselSlideForm: FormGroup;
  public file: File = new File([''], '');
  public document = document;
  public carouselSaveSubs: Subscription;
  public carouselGetSubs: Subscription;
  public carouselUploadImageSubs: Subscription;
  public paramId: number;
  public linkTriggers = [
    { value: 'NONE', label: 'None'},
    { value: 'IMAGE', label: 'Image' },
    { value: 'BUTTON', label: 'Button' }
  ];
  public buttonTrigger = false;
  public imageSourceUrl = env.imageSourceUrl;
  public url;
  public reader;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private carouselService: CarouselService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    if (this.modal) {
      if (this.id) {
        this.carouselGetSubs = this.getCarouselSlide(this.id);
      } else {
        this.carouselSlideForm = this.createEmptyForm();
      }
    } else {
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.paramId = params['id'];
          this.carouselGetSubs = this.getCarouselSlide(params['id']);
        } else {
          this.carouselSlideForm = this.createEmptyForm();
        }
      });
    }
  }

  createEmptyForm() {
    return this.carouselSlideForm = this.formBuilder.group({
      id: [null],
      header: ['', Validators.required],
      subHeader: [''],
      link: ['', Validators.required],
      buttonLabel: ['', Validators.required],
      published: [true],
      linkTrigger: ['', Validators.required],
      file: ['']
    });
  }

  getCarouselSlide(id) {
    return this.carouselService.getSlide(id)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          const carouselSlide = response;
          this.carouselSlideForm = this.formBuilder.group({
            id: [carouselSlide.id],
            header: [carouselSlide.header, Validators.required],
            subHeader: [carouselSlide.subHeader],
            link: [carouselSlide.link, Validators.required],
            buttonLabel: [carouselSlide.buttonLabel, Validators.required],
            published: [carouselSlide.published],
            linkTrigger: [carouselSlide.linkTrigger, Validators.required],
            file: [carouselSlide.file]
          });

          if (carouselSlide.linkTrigger === 'BUTTON') {
            this.buttonTrigger = true;
          }
        },
        (error) => console.log(error)
      );
  }

  onSave(carouselSlide: CarouselSlide, isValid: boolean) {
    this.carouselSaveSubs = this.carouselService.saveSlide(carouselSlide)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          const id = response.id
          if (this.file.name) {
            let formData:FormData = new FormData();
            formData.append('file', this.file, this.file.name);

            this.carouselUploadImageSubs = this.carouselService.uploadSlideImage(response.id,'prefix', formData)
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
    this.alert.success({ text: 'Carousel Slide has been saved.', timer: 1500,
    showConfirmButton: false }).catch(function () {});
    if (this.modal) {
      this.onModalSave.emit()
    } else {
      this.router.navigate(['/admin/carousel']);
    }
  }

  cancel() {
    if (this.modal) {
      this.onModalCancel.emit()
    } else {
      this.router.navigate(['/admin/carousel']);
    }
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      this.file = fileList[0];
      this.reader = new FileReader();
      this.reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      this.reader.readAsDataURL(event.target.files[0]);
    }
  }

  changeLinkTrigger() {
    let trigger = this.carouselSlideForm.get('linkTrigger').value;

    if(trigger === 'BUTTON') {
      this.buttonTrigger = true;
      this.carouselSlideForm.controls['buttonLabel'].setValue('');
    } else {
      this.buttonTrigger = false;
      this.carouselSlideForm.controls['buttonLabel'].setValue(' ');
    }

    if(trigger === 'NONE') {
      this.carouselSlideForm.controls['link'].setValue('#');
    }
  }

  withFile(): boolean {
    if(this.file.name !== null && this.file.name !== '') {
      return true;
    } else if(this.carouselSlideForm.get('file').value !== null && this.carouselSlideForm.get('file').value !== '') {
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
