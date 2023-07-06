import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SweetAlertService } from 'ngx-sweetalert2';

import { BlockTemplate }  from '@corelate/shared/enums';
import { AuthService } from "@corelate/auth/services";
import { ContactFormService } from '@corelate/core/services';
import { ContactForm } from '@corelate/shared/models';

@Component({
  selector: 'corelate-ui-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() layout;
  public BlockTemplate = BlockTemplate;
  public isLoggedIn = false;
  public contactForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private contactFormService: ContactFormService,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.createEmptyForm();
  }

  createEmptyForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSave(contactForm: ContactForm) {
    this.contactFormService.send(contactForm)
      .subscribe(
        response => {
          this.alert.success({ text: 'Your message has been sent.', timer: 1500,
            showConfirmButton: false }).catch(function () {});
          this.createEmptyForm();
        },
        error => console.log(error)
      );
  }
}
