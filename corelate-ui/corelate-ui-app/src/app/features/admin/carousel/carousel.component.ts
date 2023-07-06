import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { DataTable, TableParams, Carousel, CarouselSlide } from '@corelate/shared/models';
import { CarouselService } from '@corelate/core/services';

@Component({
  selector: 'corelate-ui-admin-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() modal;

  public carousel: Carousel;
  public carouselSlides: CarouselSlide[];
  public loading: boolean;
  public selectedId;
  public showForm = false;
  public carouselSaveSubs: Subscription;

  private params = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private carouselService: CarouselService,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.carouselSlides = [];
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo) {
    this.loading = true;
    this.params.page = pageInfo.offset;
    this.getCarouselSlides();
    this.getCarousel();
  }

  getCarousel(): void {
    this.carouselService.get()
      .subscribe(
        (carousel: Carousel) => this.carousel = carousel,
        (error) => console.log(error)
      );
  }

  getCarouselSlides(): void {
    this.carouselService.getSlides(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.carouselSlides = pagedData.results
          this.params.page = pagedData.currentPage;
          this.params.totalElements = pagedData.totalElements;
          this.loading = false;
        },
        (error) => console.log(error)
      );
  }

  onSave(form): void {
    if (form.valid) {
      this.carouselSaveSubs = this.carouselService.save(this.carousel)
        .takeUntil(this.destroy$)
        .subscribe(
          (response) => {
            if (this.modal) {
              this.modal.hide();
            }
            this.alert.success({ text: 'Carousel has been updated.', timer: 1500,
            showConfirmButton: false }).catch(function () {});
          },
          (error) => console.log(error)
        );
    }
  }

  editSlide(id) {
    if (this.modal) {
      this.selectedId = id;
      this.showForm = true;
    } else {
      if (id) {
        this.router.navigate([`/admin/carousel/edit/${id}`]);
      } else {
        this.router.navigate(['/admin/carousel/add']);
      }
    }
  }

  deleteSlide(carouselSlide: CarouselSlide) {
    this.alert.confirm({
      text: 'Are you sure you want to delete this carousel slide?',
      confirmButtonClass: 'btn light-green darken-2 waves-effect waves-light',
      cancelButtonClass: 'btn btn-outline-blue-grey',
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then(() => {
      this.carouselService.deleteSlide(carouselSlide)
        .subscribe(
          (response) => {
            this.ngOnInit();
            this.alert.success({ text: 'Carousel Slide has been deleted.', timer: 1500,
            showConfirmButton: false }).catch(function () {});
          },
          (error) => console.log(error)
        );
      },
      () => {}
    );
  }

  publishSlide(id: number) {
    this.carouselService.updatePublishStatus(id, true)
      .subscribe(
      (response) => {
        this.ngOnInit();
        this.alert.success({ text: 'Carousel Slide has been published.', timer: 1500 }).catch(function () {});
      },
      (error) => console.log(error)
    );
  }

  unPublishSlide(id: number) {
    this.carouselService.updatePublishStatus(id, false)
      .subscribe(
        (response) => {
          this.ngOnInit();
          this.alert.success({ text: 'Carousel Slide has been unpublished.', timer: 1500,
          showConfirmButton: false }).catch(function () {});
        },
        (error) => console.log(error)
      );
  }

  saveModal($event) {
    this.showForm = false;
    this.ngOnInit();
  }

  cancelModal() {
    this.showForm = false;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
