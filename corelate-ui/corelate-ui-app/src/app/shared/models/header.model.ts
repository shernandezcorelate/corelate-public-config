export class Header {
  constructor(
    public label: string,
    public subLabel: string,
    public showImage: boolean,
    public showLabel: boolean,
    public labelColor: string,
    public backgroundColor: string,
    public file: string,
    public files: string[],
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}
