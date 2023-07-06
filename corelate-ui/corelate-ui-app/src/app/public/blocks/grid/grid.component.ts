import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '@corelate/auth/services';
import { GridService } from '@corelate/core/services';
import { GridFormComponent } from '@corelate/features/admin/grid/grid-form.component';
import { BlockTemplate } from '@corelate/shared/enums';
import { Grid } from '@corelate/shared/models';
import { Subject } from 'rxjs/Subject';
import { environment as env } from 'environments/environment';

@Component({
  selector: 'corelate-ui-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  @Input() layout;
  @ViewChild(GridFormComponent)
  public gridFormComponent: GridFormComponent;
  imageSourceUrl = env.imageSourceUrl;

  public BlockTemplate = BlockTemplate;
  public grid: Grid;
  public isLoggedIn = false;

  public loading = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private gridService: GridService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.gridService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        (response: any) => {
          this.grid = response;
          this.loading = false;
        },
        (error) => console.log(error)
      );
  }

  onShowModal() {
    this.gridFormComponent.ngOnInit();
  }

  onHideModal() {
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
