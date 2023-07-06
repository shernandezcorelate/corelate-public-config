import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({selector: '[isNotAuthorized]'})
export class IsNotAuthorizeDirective implements OnInit {

  @Input() isNotAuthorized;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    if (true) {
      // this.viewContainer.createEmbeddedView(this.templateRef);
    // } else {
      this.viewContainer.clear();
    }
  }
}
