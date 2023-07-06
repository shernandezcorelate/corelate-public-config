export class Block {
  constructor(
    public blockPanels: BlockPanel[],
    public updatedBy: string,
    public updatedDate: Date
  ) { }
}

export class BlockPanel {
  constructor(
    public template: string,
    public contents: BlockContent[],
    public position: number,
    public updatedBy: string,
    public updatedDate: Date
  ) { }
}

export class BlockContent {
  constructor(
    public index: number,
    public content: string
  ) { }
}
