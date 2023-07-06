import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'corelate-ui-error-page',
  host: { class: 'd-flex w-100 justify-content-start flex-column public-container'},
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  errorCode: Params;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.errorCode = this.route.snapshot.params['code'];
  }
}
