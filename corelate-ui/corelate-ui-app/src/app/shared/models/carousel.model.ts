export class Carousel {
  constructor(
    public interval: number
  ) {}
}

export class CarouselSlide {
  constructor(
    public id: number,
    public file: string,
    public files: string[],
    public header: string,
    public subHeader: string,
    public link: string,
    public linkTrigger: string,
    public buttonLabel: string,
    public published: boolean,
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}
