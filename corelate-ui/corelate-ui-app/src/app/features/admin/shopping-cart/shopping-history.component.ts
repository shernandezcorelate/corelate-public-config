import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import {MaterialModule, MdCheckboxModule} from '@angular/material';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { ShoppingCartService } from '@corelate/core/services';
import { DataTable, CartItem, CartPayment, TableParams } from '@corelate/shared/models';

@Component({
  selector: 'corelate-ui-shopping-cart-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.scss']
})
export class ShoppingCartHistoryComponent implements OnInit, OnDestroy {
  public paymentHistory: CartPayment[];
  public loading: boolean;

  public params = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.setPage({ offset: 0 });

  }

  getPaymentHistory(): void {
    this.shoppingCartService.getAllPayment(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pageData: DataTable) => {
          this.paymentHistory = pageData.results;
          this.params.page = pageData.currentPage;
          this.params.totalElements = pageData.totalElements;
          this.loading = false;
        },
        (error) => console.log(error)
      );
  }

  back() {
    this.router.navigate([`/admin/shopping-cart`])
  }

  setPage(pageInfo) {
    this.loading = true;
    this.params.page = pageInfo.offset;
    this.getPaymentHistory();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
