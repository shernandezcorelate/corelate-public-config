import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { ColorConfig } from '@corelate/shared/models'
import { ColorConfigService } from '@corelate/core/services';

@Component({
  selector: 'corelate-ui-color-config',
  templateUrl: './color-config.component.html',
  styleUrls: ['./color-config.component.scss']
})
export class ColorConfigComponent implements OnInit, OnDestroy {
  @Input() modal;
  public colorConfigForm: FormGroup;
  public file: File = new File([""], "");
  public document = document;
  public selectedTemplate;
  public colorConfigGetSubs: Subscription;
  public colorConfigSaveSubs: Subscription;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private colorConfigService: ColorConfigService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.colorConfigGetSubs = this.colorConfigService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (colorConfig: ColorConfig) => {
          this.colorConfigForm = this.formBuilder.group({
            header: this.formBuilder.group({
              backgroundColor: [colorConfig.headerBackgroundColor, Validators.required],
              textColor: [colorConfig.headerTextColor, Validators.required]
            }),
            navigation: this.formBuilder.group({
              backgroundColor: [colorConfig.navigationBackgroundColor, Validators.required],
              textColor: [colorConfig.navigationTextColor, Validators.required]
            }),
            footer: this.formBuilder.group({
              backgroundColor: [colorConfig.footerBackgroundColor, Validators.required],
              textColor: [colorConfig.footerTextColor, Validators.required]
            }),
            buttons: this.formBuilder.group({
              primaryColor: [colorConfig.buttonsPrimaryColor, Validators.required],
              primaryTextColor: [colorConfig.buttonsPrimaryTextColor, Validators.required],
              secondaryColor: [colorConfig.buttonsSecondaryColor, Validators.required],
              secondaryTextColor: [colorConfig.buttonsSecondaryTextColor, Validators.required]
            }),
            updatedBy: [colorConfig.updatedBy],
            updatedDate: [colorConfig.updatedDate]
          });
        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSave(colorConfigForm, isValid: boolean) {
    const colorConfig = {
      "headerBackgroundColor" : colorConfigForm.header.backgroundColor,
      "headerTextColor" : colorConfigForm.header.textColor,
      "navigationBackgroundColor" : colorConfigForm.navigation.backgroundColor,
      "navigationTextColor" : colorConfigForm.navigation.textColor,
      "footerBackgroundColor" : colorConfigForm.footer.backgroundColor,
      "footerTextColor" : colorConfigForm.footer.textColor,
      "buttonsPrimaryColor" : colorConfigForm.buttons.primaryColor,
      "buttonsPrimaryTextColor" : colorConfigForm.buttons.primaryTextColor,
      "buttonsSecondaryColor" : colorConfigForm.buttons.secondaryColor,
      "buttonsSecondaryTextColor" : colorConfigForm.buttons.secondaryTextColor,
      "updatedBy" : colorConfigForm.updatedBy,
      "updatedDate" : colorConfigForm.updatedDate
    };

    this.colorConfigSaveSubs = this.colorConfigService.save(colorConfig)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.alert.success({ text: 'Color Configuration has been updated.', timer: 1500,
            showConfirmButton: false }).catch(function () {});
          if (this.modal) {
            this.modal.hide();
          } else {
            this.router.navigate(['/admin']);
          }
        },
        (error) => console.log(error)
      );
  }

  onChangeColor(color, path) {
    this.colorConfigForm.get(path).setValue(color)
  }

  cancel() {
    if (this.modal) {
      this.modal.hide();
    } else {
      this.router.navigate(['/admin']);
    }
  }
}

