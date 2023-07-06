import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({selector: '[isAuthorized]'})
export class IsAuthorizeDirective implements OnInit {

  @Input() isAuthorized;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    if (true) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    // } else {
    //   this.viewContainer.clear();
    }
  }
}
