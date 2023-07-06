import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SweetAlertService } from 'ngx-sweetalert2';
import { Router } from '@angular/router';
import 'rxjs/Rx';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { RulesEngineService } from '@corelate/core/services';
import { DataTable, TableParams, Rule } from '@corelate/shared/models';

@Component({
  selector: 'corelate-ui-rules-engine',
  styleUrls: ['./rules-engine.component.scss'],
  templateUrl: './rules-engine.component.html'
})
export class RulesEngineComponent implements OnInit, OnDestroy {
  @Input() modal;
  @Output() onModalSave: EventEmitter<any> = new EventEmitter();
  @Output() onModalCancel: EventEmitter<any> = new EventEmitter();

  public loading: boolean;
  public document = document;
  public params = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public rulesForm: FormGroup;
  public rulesEditForm: FormGroup;

  public file: File = new File([''], '');
  public ruleFile: string;
  public ruleFileContent: string;
  public ruleFileLink: string;
  public rulesSubs: Subscription;

  public rule: Rule;
  public rules: Rule[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: SweetAlertService,
    private rulesEngineService: RulesEngineService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.createEmptyForm();
    this.getRules();
    this.rule = new Rule(null, null, null, null, null, null);
    this.createEditForm();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  createEmptyForm() {
    this.rulesForm = this.formBuilder.group({
      description: ['', Validators.required],
      file: ['']
    });
  }

  createEditForm() {
    this.rulesEditForm = this.formBuilder.group({
      description: [this.rule.description, Validators.required],
      content: [this.ruleFileContent, Validators.required]
    });
  }

  uploadRules(rule: Rule, isValid: boolean) {
    if(rule.content) {
      this.file = new File([rule.content], 'edited.drl');
    }
    if (this.file.name) {
      let formData:FormData = new FormData();
      formData.append('file', this.file, this.file.name);

      this.rulesSubs = this.rulesEngineService.uploadRules(formData)
        .subscribe(
        (response) => {
          rule.file = response.ruleId;
          this.saveRule(rule);
          this.createEmptyForm();
          this.file = new File([''], '');
        },
        (error) => console.log(error)
      );
    }
  }

  saveRule(rule: Rule) {
    this.rulesEngineService.save(rule)
      .subscribe(
        (response) => {
          this.getRules();
          this.successCallback();
        },
        (error) => console.log(error)
      );
  }

  getRules(): void {
    this.rulesEngineService.getAll(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pageData: DataTable) => {
          this.rules = pageData.results;
          this.params.page = pageData.currentPage;
          this.params.totalElements = pageData.totalElements;

          this.getRuleFile(this.rules[0].file);
          this.loading = false;
        },
        (error) => console.log(error)
      );
  }

  getRuleFile(uid: string): void {
    this.ruleFile = uid;
    this.rulesEngineService.downloadRuleFile(uid)
      .takeUntil(this.destroy$)
      .subscribe(
        (result) => {
          this.ruleFileContent = result;
          this.ruleFileLink = window.URL.createObjectURL(new Blob([result], {type: 'octet/stream'}));
          this.loading = false;
        }
      );
  }

  successCallback() {
    this.alert.success({ text: 'New rule has been saved.', timer: 1500,
      showConfirmButton: false }).catch(function () {});

    if (this.modal) {
      this.onModalSave.emit()
    } else {
      this.router.navigate(['/admin/rules-engine']);
    }
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }

  viewRuleDetails(rule: Rule) {
    this.rule = rule;
  }

  downloadRulesFile () {
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.href = this.ruleFileLink;
    a.download = this.ruleFile;
    a.click();
    // window.URL.revokeObjectURL(url);
  };
}
