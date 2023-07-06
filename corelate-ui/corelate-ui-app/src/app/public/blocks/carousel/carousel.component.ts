import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { AuthService } from '@corelate/auth/services';

import { CarouselService } from '@corelate/core/services';
import { CarouselComponent as CarouselComponentAdmin } from '@corelate/features/admin/carousel/carousel.component';
import { Carousel, CarouselSlide, DataTable, TableParams } from '@corelate/shared/models';
import { environment as env } from 'environments/environment';


@Component({
  selector: 'corelate-ui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @ViewChild(CarouselComponentAdmin)
  private carouselComponentAdmin: CarouselComponentAdmin;

  public isLoggedIn = false;
  public carousel: Carousel;
  public carouselSlides: CarouselSlide[];
  public imageSourceUrl = env.imageSourceUrl;

  public loading = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private carouselService: CarouselService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    const tableParams = new TableParams();
    tableParams.page = 0;

    this.carouselService.get()
      .map(carousel => {
        carousel.interval = carousel.interval * 1000;
        return carousel;
      })
      .subscribe(
        (carousel: Carousel) => {
          this.carousel = carousel;
        },
        (error) => console.log(error)
      );

    this.carouselService.getPublishedSlides(tableParams)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.loading = false;
          this.carouselSlides = pagedData.results;
        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onShowModal() {
    this.carouselComponentAdmin.ngOnInit();
  }

  onHideModal() {
    this.carouselComponentAdmin.cancelModal();
    this.ngOnInit();
  }
}
