import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { AppInfoService, BuildInfo } from '@corelate/features/admin/app-info/app-info.service';


@Component({
  selector: 'corelate-ui-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss']
})
export class AppInfoComponent implements OnInit, OnDestroy {
  ui: BuildInfo;
  authentication: BuildInfo;
  catalog: BuildInfo;
  cms: BuildInfo;
  config: BuildInfo;
  notification: BuildInfo;
  shoppingCart: BuildInfo;
  user: BuildInfo;
  workflow: BuildInfo;
  zuul: BuildInfo;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private appInfoService: AppInfoService) {}

  ngOnInit() {
    this.getVersion().subscribe(buildInfo => this.ui = buildInfo);
    this.getVersion('authentication').subscribe(buildInfo => this.authentication = buildInfo);
    this.getVersion('catalog').subscribe(buildInfo => this.catalog = buildInfo);
    this.getVersion('cms').subscribe(buildInfo => this.cms = buildInfo);
    this.getVersion('config').subscribe(buildInfo => this.config = buildInfo);
    this.getVersion('notification').subscribe(buildInfo => this.notification = buildInfo);
    this.getVersion('shoppingCart').subscribe(buildInfo => this.shoppingCart = buildInfo);
    this.getVersion('user').subscribe(buildInfo => this.user = buildInfo);
    this.getVersion('workflow').subscribe(buildInfo => this.workflow = buildInfo);
    this.getVersion('zuul').subscribe(buildInfo => this.zuul = buildInfo);
  }

  getVersion(module?: string): any | void {
    return this.appInfoService.get(module || null)
      .takeUntil(this.destroy$);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
