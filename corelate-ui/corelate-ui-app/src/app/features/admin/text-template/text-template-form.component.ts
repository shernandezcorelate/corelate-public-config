import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import { TextTemplate } from '@corelate/shared/models';
import { TextTemplateService } from '@corelate/core/services';
import {getTemplate} from "codelyzer/util/ngQuery";

@Component({
  selector: 'corelate-ui-text-template-form',
  templateUrl: './text-template-form.component.html',
  styleUrls: ['./text-template-form.component.scss']
})
export class TextTemplateFormComponent implements OnInit , OnDestroy {

  public templateMap: Map<string, string> = new Map([
    ["USER_PASSWORD_RETRIEVE_TEMPLATE", "User Password Retrieve"],
    ["USER_PASSWORD_MAIL_TEMPLATE", "User Password Mail"],
    ["USER_PASSWORD_SMS_TEMPLATE", "User Password SMS"],
    ["USER_PASSWORD_RESET_MAIL_TEMPLATE", "User Password Reset Mail"],
    ["USER_PASSWORD_RESET_SMS_TEMPLATE", "User Password Reset SMS"],
    ["USER_PASSWORD_FORGOT_TEMPLATE", "User Password Forgot"],
    ["ACTIVATION_MAIL_TEMPLATE", "Activation Mail"],
    ["ACTIVATION_SMS_TEMPLATE", "Activation SMS"],
    ["ACTIVATION_MAIL_SUCCESS_TEMPLATE", "Activation Mail Success"],
    ["ACTIVATION_SMS_SUCCESS_TEMPLATE", "Activation SMS Success"],
  ]);

  public templateOptions = {
    'USER_PASSWORD_RETRIEVE_TEMPLATE': [ 'id',  'username',  'name',  'resetCode', 'expirationDate' ],
    'USER_PASSWORD_MAIL_TEMPLATE': [ 'id',  'username',  'name',  'date' ],
    'USER_PASSWORD_SMS_TEMPLATE': [ 'id',  'username',  'name',  'date' ],
    'USER_PASSWORD_RESET_MAIL_TEMPLATE': [ 'id',  'username',  'name',  'date' ],
    'USER_PASSWORD_RESET_SMS_TEMPLATE': [ 'id',  'username',  'name',  'date' ],
    'ACTIVATION_MAIL_TEMPLATE': [ 'id',  'username',  'password',  'activationCode' ],
    'ACTIVATION_SMS_TEMPLATE': [ 'id',  'username',  'password',  'activationCode' ],
    'ACTIVATION_MAIL_SUCCESS_TEMPLATE': [ 'id',  'username',  'name',  'date' ],
    'ACTIVATION_SMS_SUCCESS_TEMPLATE': [ 'id',  'username',  'name',  'date' ]
  };

  public textTemplateForm: FormGroup;
  public templateGetSubs: Subscription;
  public templatePreview: string;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private textTemplateService: TextTemplateService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.templateGetSubs = this.getTemplate(params['id']);
      } else {
        this.textTemplateForm = this.createEmptyForm();
      }
    });
  }

  createEmptyForm() {
    return this.formBuilder.group({
      id: [''],
      key: ['', Validators.required],
      template: ['', Validators.required]
    });
  }

  getTemplate(id) {
    return this.textTemplateService.get(id)
      .takeUntil(this.destroy$)
      .subscribe(
        (template) => {
          this.textTemplateForm = this.formBuilder.group({
            id: [template.id],
            key: [template.key, Validators.required],
            template: [template.template, Validators.required]
          });
        }
      );
  }

  onSave(textTemplate: TextTemplate, isValid: boolean) {
    this.textTemplateService.save(textTemplate)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.router.navigate(['/admin/text-template']);
        },
        (error) => console.log(error)
      );
  }

  onPreview() {
    this.templatePreview = this.textTemplateForm.get('template').value;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
