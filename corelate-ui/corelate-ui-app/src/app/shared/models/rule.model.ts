export class Rule {
  constructor(
    public id: number,
    public description: string,
    public content: string,
    public file: string,
    public updatedBy: string,
    public updatedDate: Date
  ) { }
}
