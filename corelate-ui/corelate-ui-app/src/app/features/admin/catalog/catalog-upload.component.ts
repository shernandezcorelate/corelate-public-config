import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { SweetAlertService } from 'ngx-sweetalert2';
import { Subscription } from 'rxjs/Subscription';

import { CatalogService } from '@corelate/core/services';


@Component({
  selector: 'corelate-ui-catalog-upload',
  templateUrl: './catalog-upload.component.html',
  styleUrls: ['./catalog-upload.component.scss']
})
export class CatalogUploadComponent implements OnDestroy {
  public catalog = {
    key: '',
    label: ''
  };
  public file: File;
  public document = document;
  public catalogUploadSubs: Subscription;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private catalogService: CatalogService,
    private alert: SweetAlertService,
    private router: Router
  ) { }

  fileChange(event) {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
        this.file = fileList[0];
    }
  }

  upload(form) {
    if (form.valid) {
      const formData: FormData = new FormData();

      formData.append('file', this.file, this.file.name);
      formData.append('key', this.catalog.key);
      formData.append('label', this.catalog.label);

      this.catalogUploadSubs = this.catalogService
        .upload(formData)
        .takeUntil(this.destroy$)
        .subscribe(() => {
          this.alert.success({ title: 'Catalog', text: 'Upload success' });
          this.router.navigate(['/admin/catalog']);
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
