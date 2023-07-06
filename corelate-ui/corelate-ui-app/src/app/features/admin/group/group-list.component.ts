import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { GroupService } from './group.service';
import { DataTable, Group, TableParams } from '@corelate/shared/models';


@Component({
  selector: 'corelate-ui-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit, OnDestroy {
  groups: Group[];
  params = new TableParams();
  loading: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private groupService: GroupService,
    private router: Router
  ) { }
 S
  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  getAllPermissions(): void {
    this.groupService.getAll(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.groups = pagedData.results;
          this.params.page = pagedData.currentPage;
          this.params.totalElements = pagedData.totalElements;
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
  }

  edit(id: number) {
    this.router.navigate(['/admin/group/edit', id]);
  }

  setPage(pageInfo) {
    this.loading = true;
    this.params.page = pageInfo.offset;
    this.getAllPermissions();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
