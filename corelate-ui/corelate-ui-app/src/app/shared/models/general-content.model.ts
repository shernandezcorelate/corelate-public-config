export class GeneralContent {
  constructor(
    public id: number,
    public file: string,
    public files: string[],
    public title: string,
    public content: string,
    public category: string,
    public imageUrl: any,
    public bannerPlaceHolder: any,
    public published: boolean,
    public excerpt: string,
    public updatedBy: string,
    public updatedDate: Date,
    public createdDate: Date
  ) {}
}
