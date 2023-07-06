import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SweetAlertService } from 'ngx-sweetalert2';


@Component({
  selector: 'corelate-ui-activiti-form',
  templateUrl: './activiti-form.component.html'
})
export class ActivitiFormComponent implements OnInit {
  public taskId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: SweetAlertService
  ) { }

  public ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.taskId = params.id;
      }
    });
  }

  public formCompleted() {
    this.alert.success({ text: 'Form has been completed.' });
    this.router.navigate(['/admin']);
  }

  public formSaved() {
    this.alert.success({ text: 'Form has been saved.' });
    this.router.navigate(['/admin']);
  }
}
