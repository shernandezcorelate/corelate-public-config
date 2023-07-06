import {Component, OnDestroy, OnInit, ViewChild, Input} from '@angular/core';

import sortBy from 'lodash/sortBy';
import { Subject } from 'rxjs/Subject';
import { SweetAlertService } from 'ngx-sweetalert2';

import { CatalogService } from '@corelate/core/services';
import {CatalogFormComponent} from "@corelate/features/admin/catalog/catalog-form.component";
import {ModalDirective} from "@corelate/typescripts/free";

import { DataTable, TableParams } from '@corelate/shared/models';

@Component({
  selector: 'corelate-ui-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']

})
export class CatalogListComponent implements OnInit, OnDestroy {
  @ViewChild('keyDropdown') keyDropdown;
  @ViewChild('catalogModal') modal:ModalDirective;
  @Input() isAdmin: boolean;

  public key = '';
  public fieldName = '';
  public value = '';
  public keys = [];
  public rows = [];
  public columns = [];
  public availableColumns = [];
  public catalogKey: string;
  public catalogName: string;
  public searching = false;
  public totalElements = 0;
  public loading = true;

  public selectedId;
  public showForm = false;
  public params = new TableParams();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private catalogService: CatalogService,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.getKeys();
    // this.setPage({ offset: 0 });
  }

  public selectKey(key) {
    this.key = key.value;
  }

  public selectColumn(column) {
    // do nothing
  }

  public searchCatalog() {
    const queryObject = {
      page: this.params.page,
      size: 10,
      sort: 'updatedDate',
      fieldName: this.fieldName,
      value: this.value,
      key: this.key
    };
    this.searching = true;
    this.catalogService.search(queryObject)
      .takeUntil(this.destroy$)
      .subscribe(
        (catalogs) => {
        if (catalogs.results.length) {
          this.loading = false;
          this.columns = this.getColumns(catalogs.results);
          this.rows = this.getRows(catalogs.results);
          this.catalogKey = this.key;
          this.params.page = catalogs.currentPage;
          this.params.totalElements = catalogs.totalElements;
        } else {
          this.columns = [];
          this.rows = [];
          this.catalogKey = null;
          this.catalogName = null;
        }
        this.searching = false;
      });
  }

  public getKeys() {
    this.catalogService.getKeys()
      .takeUntil(this.destroy$)
      .subscribe(
        keys => {
          this.keys = keys.map(key => ({label: key.label, value: key.name}));
          if (this.keys[0] && this.keys[0].value) {
            setTimeout(() => {
              this.keyDropdown.select(this.keys[0].value);
              this.params.page = 0;
              this.searchCatalog();
            });
          } else {
            this.columns = [];
            this.rows = [];
            this.rows.slice();
            this.columns.slice();
            this.catalogName = null;
          }
        });
  }

  private getColumns(catalogs: any): String[] {
    this.catalogName = catalogs[0].label?catalogs[0].label:null;

    const columns = catalogs[0].entries.map(entry => ({ 'name': entry.fieldName, 'index': entry.index}));
    return sortBy(columns, ['index']);
  }

  private getRows(catalogs: any) {
    const rows = [];

    catalogs.forEach(catalog => {
      const row = {};
      row['id'] = catalog.id;

      catalog.entries.forEach(entry => row[entry.fieldName] = entry.value);
      rows.push(row);
    });

    return rows;
  }

  public deleteCatalog() {
    this.alert.confirm({
      text: 'Are you sure you want to delete this catalog?',
      confirmButtonClass: 'btn light-green darken-2 waves-effect waves-light',
      cancelButtonClass: 'btn btn-outline-blue-grey',
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then(() => {
        this.catalogService.deleteByKey(this.key)
          .takeUntil(this.destroy$)
          .subscribe(
            response => {
              this.getKeys();
              this.alert.success({ text: 'Catalog has been deleted.', timer: 1500,
                showConfirmButton: false }).catch(function () {});
            },
            error => console.log(error)
          );
      },
      () => {}
    );
  }

  public deleteEntry(row) {
    this.alert.confirm({
      text: 'Are you sure you want to delete this catalog entry?',
      confirmButtonClass: 'btn light-green darken-2 waves-effect waves-light',
      cancelButtonClass: 'btn btn-outline-blue-grey',
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then(() => {
        this.catalogService.delete(row.id)
          .takeUntil(this.destroy$)
          .subscribe(
            response => {
              if (this.rows.length > 1) {
                this.searchCatalog();
              } else {
                this.getKeys();
              }
              this.alert.success({ text: 'Catalog item has been deleted.', timer: 1500,
                showConfirmButton: false }).catch(function () {});
            },
            error => console.log(error)
          );
      },
      () => {}
    );
  }

  setPage(pageInfo) {
    this.loading = true;
    this.params.page = pageInfo.offset;
    this.searchCatalog();
  }

  editCatalogEntry(id) {
    this.selectedId = id;
    this.showForm = true;
    this.modal.show();
  }

  onHideCatalogModal() {
    this.showForm = false;
    this.searchCatalog();
  }

  saveModal($event) {
    this.showForm = false;
    this.modal.hide();
    this.ngOnInit();
  }

  resetPage() {
    this.params.page = 0;
  }

  cancelModal() {
    this.showForm = false;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
