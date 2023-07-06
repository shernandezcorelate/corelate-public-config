import { Component, OnDestroy, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import sortBy from 'lodash/sortBy';

import { Subject } from 'rxjs/Subject';
import { SweetAlertService } from 'ngx-sweetalert2';
import { Subscription } from 'rxjs/Subscription';

import { CatalogService } from '@corelate/core/services';

@Component({
  selector: 'corelate-ui-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.scss']
})
export class CatalogFormComponent implements OnInit, OnDestroy {
  @Input() id;
  @Input() modal;
  @Output() onModalSave: EventEmitter<any> = new EventEmitter();
  @Output() onModalCancel: EventEmitter<any> = new EventEmitter();

  public paramId: number;
  public catalogName: string;
  public catalog: any = {};
  public submitting = false;
  public catalogForm: FormGroup;
  public catalogFormSaveSubs: Subscription;
  public catalogFormGetSubs: Subscription;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private alert: SweetAlertService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (this.id) {
        this.paramId = params.id;
        this.catalogFormGetSubs = this.catalogService.get(this.id)
          .takeUntil(this.destroy$)
          .subscribe(
            catalog => {
              this.catalogName = catalog.label;
              const entries = sortBy(catalog.entries, ['index']);

              const entriesFGs = entries.map(entry => {
                return this.formBuilder.group({
                  fieldName: [entry.fieldName, Validators.required],
                  value: [entry.value],
                  index: [entry.index]
                });
              });

              this.catalogForm = this.formBuilder.group({
                id: [catalog.id],
                key: [catalog.key, Validators.required],
                label: [catalog.label, Validators.required],
                entries: this.formBuilder.array(entriesFGs)
              });
            },
            error => console.log(error)
          );
      } else {
        this.catalogForm = this.formBuilder.group({
          key: ['', Validators.required],
          label: ['', Validators.required],
          entries: this.formBuilder.array([])
        });
      }
    });
  }

  public onSave(catalog, isValid: boolean) {
    if (catalog.id) {
      this.catalogFormSaveSubs = this.catalogService.update(catalog)
        .takeUntil(this.destroy$)
        .subscribe(
          () => {
            this.submitting = false
            this.alert.success({ text: 'Catalog updated.', timer: 1500, showConfirmButton: false })
              .catch(function () {});
            this.onModalSave.emit();
            //this.router.navigate(['/admin/catalog']);
          },
          error => console.log(error)
        );
    } else {
      this.catalogFormSaveSubs = this.catalogService.add(catalog)
        .takeUntil(this.destroy$)
        .subscribe(
          () => {
            this.alert.success({ text: 'Catalog added.', timer: 1500, showConfirmButton: false })
              .catch(function () {});
            this.onModalSave.emit();
            //this.router.navigate(['/admin/catalog']);
          },
          error => console.log(error)
        );
    }
  }

  cancel() {
    this.onModalCancel.emit();
  }

  addEntry() {
    this.entries.push(this.formBuilder.group({
      fieldName: ['', Validators.required],
      value: ['', Validators.required],
      index: [this.entries.length]
    }));
  }

  deleteEntry(index) {
    this.entries.controls[index].value.value = '';

  }

  get entries(): FormArray {
    return this.catalogForm.get('entries') as FormArray;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
