export class Footer {
  constructor(
    public description: string,
    public copyright: string,
    public file: string,
    public files: string[],
    public panels: FooterPanel[],
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}

export class FooterPanel {
  constructor(
    public id: number,
    public name: string,
    public links: FooterPanelLink[],
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}

export class FooterPanelLink {
  constructor(
    public name: string,
    public symlink: string
  ) {}
}
