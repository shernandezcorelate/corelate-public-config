export class Grid {
  constructor(
    public id: number,
    public heading: string,
    public description: string,
    public gridItems: GridItem[],
    public updatedBy: string,
    public updatedDate: Date
  ) { }
}

export class GridItem {
  constructor(
    public id: number,
    public file: string,
    public files: any,
    public title: string,
    public excerpt: string,
    public content: string,
    public position: number,
    public updatedBy: string,
    public updatedDate: Date
  ) { }
}
