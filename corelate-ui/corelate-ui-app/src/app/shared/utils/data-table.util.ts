import { URLSearchParams } from '@angular/http';
import { TableParams } from '@corelate/shared/models';

export interface FilterParams {
  deleted?: boolean;
  published?: boolean;
  category?: string;
}

export class DataTableUtil {
  constructor() {}

  public buildParams(tableParams: TableParams, filters?: FilterParams): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    params.append('page', tableParams.page.toLocaleString());
    params.append('size', tableParams.size.toLocaleString());
    params.append('sort', tableParams.sort ? tableParams.sort + ',' + tableParams.sortDirection : '');

    if (filters) {
      params.append('published', filters['published'] ?  filters['published'].toString() : '');
      params.append('category', filters['category'].toUpperCase());
    }

    return params;
  }
}
