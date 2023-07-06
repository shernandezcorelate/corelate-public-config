import { EventEmitter, Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Carousel, CarouselSlide, DataTable, TableParams } from '@corelate/shared/models';
import { DataTableUtil, FilterParams, HttpUtil } from '@corelate/shared/utils';

@Injectable()
export class CarouselService {
  hideForm = new EventEmitter<any>();

  constructor(private httpUtil: HttpUtil, private dataTableUtil: DataTableUtil) {}

  public get(): Observable<Carousel> {
    return this.httpUtil.request('/carousel', {
      method: RequestMethod.Get
    });
  }

  public getSlide(id: number): Observable<CarouselSlide> {
    return this.httpUtil.request(`/carousel-slide/${id}`, {
      method: RequestMethod.Get
    });
  };

  public getSlides(tableParams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tableParams, filters);

    return this.httpUtil.request('/carousel-slide', {
      method: RequestMethod.Get,
      params: params
    });
  }

  public getPublishedSlides(tableParams: TableParams, filters?: FilterParams): Observable<DataTable> {
    const params = this.dataTableUtil.buildParams(tableParams, filters);

    return this.httpUtil.request('/carousel-slide/published', {
      method: RequestMethod.Get,
      params: params
    });
  }

  public save(carousel: Carousel): Observable<Carousel> {
    return this.httpUtil.request('/carousel', {
      method: RequestMethod.Put,
      body: carousel
    });
  }

  public saveSlide(carouselSlide: CarouselSlide): Observable<CarouselSlide> {
    const id = carouselSlide.id || '';
    return this.httpUtil.request(`/carousel-slide/${id}`, {
      method: carouselSlide.id ? RequestMethod.Put : RequestMethod.Post,
      body: carouselSlide
    });
  }

  public deleteSlide(carouselSlide: CarouselSlide): Observable<CarouselSlide> {
    return this.httpUtil.request(`/carousel-slide/${carouselSlide.id}`, {
      method: RequestMethod.Delete
    });
  }

  public updatePublishStatus(id: number, publish: boolean): Observable<CarouselSlide> {
    const action = publish ? 'publish' : 'unpublish';
    return this.httpUtil.request(`/carousel-slide/${id}/${action}`, {
      method: RequestMethod.Put
    });
  }

  public uploadSlideImage(id: number, prefix: string, formData) {
    return this.httpUtil.request(`/carousel-slide/${id}/upload/${prefix}`, {
      method: RequestMethod.Post,
      body: formData,
      noContentType: true
    });
  }
}
