import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTable, TableParams, User } from '@corelate/shared/models';
import { Subject } from 'rxjs/Subject';
import { UserService } from '@corelate/core/services';


@Component({
  selector: 'corelate-ui-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  params = new TableParams();
  loading: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  getAllPermissions(): void {
    this.userService.getAll(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pagedData: DataTable) => {
          this.users = pagedData.results;
          this.params.page = pagedData.currentPage;
          this.params.totalElements = pagedData.totalElements;
          this.loading = false;
        },
        (error) => console.log(error)
      );
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
