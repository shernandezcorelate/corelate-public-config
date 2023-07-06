import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { Footer,  } from '@corelate/shared/models';
import { FooterService } from '@corelate/core/services';
import { environment as env } from 'environments/environment';

@Component({
  selector: 'corelate-ui-admin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit , OnDestroy {
  @Input() modal;
  public footerForm: FormGroup;
  public file: File = new File([""], "");
  public document = document;

  public footerGetSubs: Subscription;
  public footerSaveSubs: Subscription;
  public url;
  public reader;
  public imageSourceUrl = env.imageSourceUrl;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private footerService: FooterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.footerGetSubs = this.getFooter();
  }

  getFooter() {
    return this.footerService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (footer: Footer) => {
          const panelsFGs = footer.panels.map(panel => {
            const linksFGs = panel.links.map(link => this.formBuilder.group(link));
            const linksFormArray = this.formBuilder.array(linksFGs);
            return this.formBuilder.group({
              id: panel.id,
              name: panel.name,
              links: linksFormArray
            });
          });

          this.footerForm = this.formBuilder.group({
            description: [footer.description],
            file: [footer.file],
            copyright: [footer.copyright],
            panels: this.formBuilder.array(panelsFGs)
          });
        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSave(footer: Footer, isValid: boolean) {
    this.footerSaveSubs = this.footerService.save(footer)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          //upload
          if (this.file.name) {
            let formData:FormData = new FormData();
            formData.append('file', this.file, this.file.name);

            this.footerSaveSubs = this.footerService.uploadImage('prefix', formData)
              .subscribe(
                (response) => {
                  this.successCallback();
                },
                (error) => console.log(error)
              );
          } else {
            this.successCallback();
          }
        },
        (error) => console.log(error)
      );
  }

  addPanels() {
    this.panels.push(this.formBuilder.group({
      id: [''],
      name: [''],
      links: this.formBuilder.array([
        this.formBuilder.group({
          name: [''],
          symlink: ['']
        })
      ])
    }));
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;

    if(fileList.length > 0) {
      this.file = fileList[0];
      this.reader = new FileReader();
      this.reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      this.reader.readAsDataURL(event.target.files[0]);
    }
  }

  cancel() {
    if (this.modal) {
      this.modal.hide();
    } else {
      this.router.navigate(['/admin']);
    }
  }

  addLinks(index) {
    const linksControl = this.panels.controls[index]['controls']['links'] as FormArray;
    linksControl.push(this.formBuilder.group({
      name: [''],
      symlink: ['']
    }));
  }

  deletePanel(index) {
    this.panels.removeAt(index);
  }

  deleteLink(panelIndex, linkIndex) {
    const linksControl = this.panels.controls[panelIndex]['controls']['links'] as FormArray;
    linksControl.removeAt(linkIndex);
  }

  successCallback() {
    this.alert.success({ text: 'Footer has been saved.', timer: 1500,
      showConfirmButton: false }).catch(function () {});
    if (this.modal) {
      this.modal.hide();
    }
  }

  get panels(): FormArray {
    return this.footerForm.get('panels') as FormArray;
  };
}
