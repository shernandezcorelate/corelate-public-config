import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { GridService } from '@corelate/core/services';
import {Grid, GridItem, TableParams} from '@corelate/shared/models';
import { InputValidator, PositionValidator } from '@corelate/shared/validators';
import { environment as env } from 'environments/environment';

@Component({
  selector: 'corelate-ui-grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.scss']
})
export class GridFormComponent implements OnInit , OnDestroy {
  @Input() id;
  @Input() modal;
  @Output() onModalSave: EventEmitter<any> = new EventEmitter();
  @Output() onModalCancel: EventEmitter<any> = new EventEmitter();

  public gridForm: FormGroup;
  public gridGetSubs: Subscription;
  public gridSaveSubs: Subscription;
  public paramId: number;
  public grid: Grid;
  public file: File = new File([''], '');
  public files = {};
  public document = document;

  public url;
  public reader;
  public imageSourceUrl = env.imageSourceUrl;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private alert: SweetAlertService,
      private gridService: GridService
  ) { }


  ngOnInit() {
    this.gridGetSubs = this.getGrid();
  }

  getGrid() {
    return this.gridService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (grid) => {
          this.grid = grid;
          this.gridForm = this.formBuilder.group({
            id: [grid.id],
            heading: [grid.heading, Validators.required],
            description: [grid.description, Validators.required],
            gridItems: this.formBuilder.array([])
          }, {
            validator: PositionValidator.NoRepeat('gridItems')
          });

          if (grid.gridItems) {
            grid.gridItems.map(gridItem => {
              if(gridItem.files.length > 0) {
                gridItem.file = gridItem.files[0];
              }
            });

            const gridItemFGs = grid.gridItems.map((gridItem, index) => this.formBuilder.group({
              id: [gridItem.id],
              file: [gridItem.file],
              files: [gridItem.files],
              title: [gridItem.title, Validators.required],
              excerpt: [gridItem.excerpt, Validators.required],
              content: [gridItem.content],
              position: [index]
              //position: [gridItem.position, [Validators.required, InputValidator.NumberMin(1)]]
            }));
            const gridItemFormArray = this.formBuilder.array(gridItemFGs);
            this.gridForm.setControl('gridItems', gridItemFormArray);
          }

        },
        (error) => console.log(error)
      );
  }

  onSave(grid: Grid, isValid: boolean) {
    this.gridSaveSubs = this.gridService.save(grid)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          response.gridItems.map((gridItem, index) => {
            if (this.files[index] && this.files[index].name) {
              let formData:FormData = new FormData();
              formData.append('file', this.files[index], this.files[index].name);
              this.gridService.uploadGridItemImage(gridItem.id, 'prefix', formData)
                .subscribe(
                  (response) => {
                      // this.alert.success({ text: 'Grid item has been saved.', timer: 1500,
                      // showConfirmButton: false }).catch(function () {});
                      // this.router.navigate(['/admin/grid']);
                  },
                  (error) => console.log(error)
                );
            }
          });

          this.alert.success({ text: 'Grid item has been saved.', timer: 1500,
            showConfirmButton: false }).catch(function () {});

          if (this.modal) {
            this.onModalSave.emit();
          } else {
            this.router.navigate(['/admin/grid']);
          }

          this.getGrid();
        },
        (error) => console.log(error)
      );
  }

  cancel() {
    this.onModalCancel.emit()
  }

  addGridItem() {
    this.files[this.gridItems.length] = new File([''], '');
    this.gridItems.push(this.formBuilder.group({
      id: null,
      file: '',
      files: [],
      title: ['', Validators.required],
      excerpt: ['', Validators.required],
      content: [''],
      position: [this.gridItems.length]
      //position: ['', [Validators.required, InputValidator.NumberMin(1)]]
    }));
  }

  deleteGridItem(index) {
    this.gridItems.removeAt(index);
    this.files[index] = null;

    // reset position and file index
    this.gridItems.controls.map((gridItem, i) => {
      this.files[i] = this.files[gridItem.value.position];
      gridItem.value.position = i;
    });

    // refresh files position
  }

  get gridItems(): FormArray {
    return this.gridForm.get('gridItems') as FormArray;
  };

  fileChange(event, index) {
    let fileList: FileList = event.target.files;

    if(fileList.length > 0) {
      this.files[index] = fileList[0];
      this.reader = new FileReader();
      this.reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      this.reader.readAsDataURL(fileList[0]);
    }
  }

  selectFile(id) {
    document.getElementById(`gridItemImage${id}`).click();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
