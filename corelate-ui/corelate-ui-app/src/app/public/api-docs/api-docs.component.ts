import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { environment as env } from 'environments/environment';

@Component({
  selector: 'corelate-ui-api-docs',
  templateUrl: './api-docs.component.html',
  styleUrls: ['./api-docs.component.scss']
})
export class ApiDocsComponent implements OnInit {
  url: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.module) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(env.apiDocsUrl + params.module + '/docs/index.html');
      }
    });
  }
}
