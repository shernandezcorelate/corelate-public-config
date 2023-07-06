export class TextTemplate {
  constructor(
    public id: number,
    public key: string,
    public template: string,
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}
