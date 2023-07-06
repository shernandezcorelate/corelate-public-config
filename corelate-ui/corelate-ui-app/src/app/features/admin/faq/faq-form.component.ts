import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ngx-sweetalert2';

import { FaqService } from '@corelate/core/services';
import { Faq } from '@corelate/shared/models';


@Component({
  selector: 'corelate-ui-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.scss']
})
export class FaqFormComponent implements OnInit, OnDestroy {
  @Input() id;
  @Input() modal;
  @Output() onModalSave: EventEmitter<any> = new EventEmitter();
  @Output() onModalCancel: EventEmitter<any> = new EventEmitter();

  public faqForm: FormGroup;
  public faqSubs: Subscription;
  public faqFormSubs: Subscription;
  public paramId: number;
  public categories = [
    {value: 'NEWS', label: 'News'},
    {value: 'ANNOUNCEMENTS', label: 'Announcements'},
    {value: 'ADVOCACIES', label: 'Advocacies'},
    {value: 'EVENTS', label: 'Events'}
  ];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private faqService: FaqService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    if (this.modal) {
      if (this.id) {
        this.faqFormSubs = this.getFaq(this.id);
      } else {
        this.faqForm = this.createEmptyForm();
      }
    } else {
      this.route.params.subscribe(params => {
        if (params['id']) {
          this.paramId = params['id'];
          this.faqFormSubs = this.getFaq(params['id']);
        } else {
          this.faqForm = this.createEmptyForm();
        }
      });
    }
  }

  createEmptyForm() {
    return this.formBuilder.group({
      id: [null],
      question: ['', Validators.required],
      answer: ['', Validators.required],
      published: [true],
      position: ['']
    });
  }

  getFaq(id) {
    return this.faqService.get(id)
      .takeUntil(this.destroy$)
      .subscribe(
        (faq) => {
          this.faqForm = this.formBuilder.group({
            id: [faq.id],
            question: [faq.question, Validators.required],
            answer: [faq.answer, Validators.required],
            published: [faq.published],
            position: [faq.position]
          });
        },
        (error) => console.log(error)
      );
  }

  onSave(faq: Faq, isValid: boolean) {
    this.faqSubs = this.faqService.save(faq)
      .takeUntil(this.destroy$)
      .subscribe(
        (response) => {
          this.alert.success({ text: 'FAQ has been saved.', timer: 1500,
          showConfirmButton: false }).catch(function () {});
          if (this.modal) {
            this.onModalSave.emit();
          } else {
            this.router.navigate(['/admin/faq']);
          }
        },
        (error) => console.log(error)
      );
  }

  cancel() {
    if (this.modal) {
      this.onModalCancel.emit()
    } else {
      this.router.navigate(['/admin/faq']);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
