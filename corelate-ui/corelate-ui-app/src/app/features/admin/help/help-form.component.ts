import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { HelpService } from '@corelate/core/services';
import { HelpTopic, HelpSubTopic } from '@corelate/shared/models';


@Component({
  selector: 'corelate-ui-help-form',
  templateUrl: './help-form.component.html',
  styleUrls: ['./help-form.component.scss']
})
export class HelpFormComponent implements OnInit , OnDestroy {
  @Input() id;
  @Input() modal;
  @Output() onModalSave: EventEmitter<any> = new EventEmitter();
  @Output() onModalCancel: EventEmitter<any> = new EventEmitter();

  public helpForm: FormGroup;
  public helpFormSubs: Subscription;
  public helpSubs: Subscription;
  public paramId: number;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
      private helpService: HelpService ,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private alert: SweetAlertService
  ) { }

  ngOnInit() {
    if (this.modal) {
      if (this.id) {
        this.helpFormSubs = this.getHelpTopic(this.id);
      } else {
        this.helpForm = this.createEmptyForm();
      }
    } else {
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.paramId = params['id'];
          this.helpFormSubs = this.getHelpTopic(params.id);
        } else {
          this.helpForm = this.createEmptyForm();
        }
      });
    }
  }

  createEmptyForm() {
    return this.formBuilder.group({
      id: [null],
      topic: ['', Validators.required],
      published: [true],
      subTopics: this.formBuilder.array([])
    });
  }

  getHelpTopic(id) {
    return this.helpService.get(id)
      .takeUntil(this.destroy$)
      .subscribe(
        (help) => {
          this.helpForm = this.formBuilder.group({
            id: [help.id],
            topic: [help.topic, Validators.required],
            published: [help.published],
            subTopics: this.formBuilder.array([])
          });

          const subTopicFGs = help.subTopics.map(subTopics => this.formBuilder.group(subTopics));
          const subTopicFormArray = this.formBuilder.array(subTopicFGs);
          this.helpForm.setControl('subTopics', subTopicFormArray);
        },
        (error) => console.log(error)
      );
  }

  onSave(content: HelpTopic, isValid: boolean) {
    this.helpSubs = this.helpService.save(content)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.alert.success({ text: 'Help has been saved.', timer: 1500,
          showConfirmButton: false }).catch(function () {});
          if (this.modal) {
            this.onModalSave.emit();
          } else {
            this.router.navigate(['/admin/online-help']);
          }
        },
        (error) => console.log(error)
      );
  }

  cancel() {
    if (this.modal) {
      this.onModalCancel.emit()
    } else {
      this.router.navigate(['/admin/online-help']);
    }
  }

  addSubTopic() {
    this.subTopics.push(this.formBuilder.group(new HelpSubTopic('','','', false, 0, null, null)));
  }

  deleteSubTopic(index) {
    this.subTopics.removeAt(index);
  }

  get subTopics(): FormArray {
    return this.helpForm.get('subTopics') as FormArray;
  };

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
