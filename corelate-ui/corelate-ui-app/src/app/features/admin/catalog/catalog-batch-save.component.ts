import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import { Subject } from 'rxjs/Subject';
import { SweetAlertService } from 'ngx-sweetalert2';
import { Subscription } from 'rxjs/Subscription';

import { CatalogService } from '@corelate/core/services';


@Component({
  selector: 'corelate-ui-catalog-batch-save',
  templateUrl: './catalog-batch-save.component.html',
  styleUrls: ['./catalog-batch-save.component.scss']
})
export class CatalogBatchSaveComponent implements OnInit, OnDestroy {
  public catalogSaveSubs: Subscription;
  public catalogForm: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private catalogService: CatalogService,
    private alert: SweetAlertService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.catalogForm = this.createEmptyForm();
  }

  createEmptyForm() {
    return this.catalogForm = this.formBuilder.group({
      label: ['', Validators.required],
      key: ['', Validators.required],
      columns: this.formBuilder.array([['', Validators.required]]),
      rows: this.formBuilder.array([
        this.formBuilder.array([['', Validators.required]])
      ])
    });
  }

  get columns(): FormArray {
    return this.catalogForm.get('columns') as FormArray;
  }

  get rows(): FormArray {
    return this.catalogForm.get('rows') as FormArray;
  }

  addColumn() {
    this.columns.push(new FormControl('', Validators.required));
    this.rows.controls.map((row) => {
      const rowArray: FormArray = row as FormArray;
      rowArray.push(new FormControl('', Validators.required));
    })
  }

  deleteColumn(index) {
    this.columns.removeAt(index);
    this.rows.controls.map((row) => {
      const rowArray: FormArray = row as FormArray;
      rowArray.removeAt(index)
    })
  }

  addRow() {
    const newRow = [];
    this.columns.controls.forEach(_ => newRow.push(['', Validators.required]));
    this.rows.push(this.formBuilder.array(newRow));
  }

  deleteRow(index) {
    this.rows.removeAt(index);
  }

  onSave(catalog) {
    const rowEntries = [];

    catalog.rows.forEach((row) => {
      const entries = [];
      row.forEach((value, index) => {
        entries.push({
          fieldName: catalog.columns[index],
          value,
          index
        });
      });
      rowEntries.push({entries});
    });

    const payload = {
      key: catalog.key,
      label: catalog.label,
      rowEntries
    };

    this.catalogSaveSubs = this.catalogService.save(payload)
      .takeUntil(this.destroy$)
      .subscribe(
        () => {
          this.alert.success({ text: 'Catalog added.', timer: 1500, showConfirmButton: false })
            .catch(function () {});
          this.router.navigate(['/admin/catalog']);
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
