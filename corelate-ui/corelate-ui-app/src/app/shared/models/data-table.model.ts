export class Page {
  // The total number of elements
  totalElements = 0;
  // The number of elements in the page
  pageSize = 0;
  // The current page number
  currentPage = 0;
}

export class TableParams {
  constructor (
    public page = 0,
    public size = 10,
    public sort?: string,
    public sortDirection?: string,
    public totalElements = 0
  ) {}
}

export class DataTable {
  constructor(
    public totalElements: number,
    public pageSize: number,
    public currentPage: number,
    public hasNextPage: boolean,
    public results: any[]
  ) {}
}
