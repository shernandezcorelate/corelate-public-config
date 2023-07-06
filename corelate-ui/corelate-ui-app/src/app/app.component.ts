import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { SiteHead } from '@corelate/shared/models';
import { SiteHeadService } from '@corelate/core/services';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'corelate-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public document = document;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public constructor(
    private siteHeadService: SiteHeadService,
    private titleService: Title
  ){}

  ngOnInit() {
    this.siteHeadService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (siteHead: SiteHead) => {
          this.titleService.setTitle(siteHead.title);
        },
        (error) => console.log(error)
      );
  }
}
