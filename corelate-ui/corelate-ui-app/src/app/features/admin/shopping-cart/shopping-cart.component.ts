import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SweetAlertService } from 'ngx-sweetalert2';
import {MaterialModule, MdCheckboxModule} from '@angular/material';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { ShoppingCartService } from '@corelate/core/services';
import { DataTable, CartItem, CartPayment, TableParams } from '@corelate/shared/models';

@Component({
  selector: 'corelate-ui-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  public cartPayment: CartPayment;
  public cartItems: CartItem[];
  public selectedItems: CartItem[];
  public subTotal: number;
  public loading: boolean;

  public params = new TableParams();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private alert: SweetAlertService
  ) {}

  ngOnInit() {
    this.cartItems = [];
    this.selectedItems = [];
    this.setPage({ offset: 0 });
    this.subTotal = this.getTotal(this.selectedItems);
  }

  getCartItems(): void {
    this.shoppingCartService.getAll(this.params)
      .takeUntil(this.destroy$)
      .subscribe(
        (pageData: DataTable) => {
          this.cartItems = pageData.results;
          this.params.page = pageData.currentPage;
          this.params.totalElements = pageData.totalElements;
          this.loading = false;
        },
        (error) => console.log(error)
      );
  }

  pay() {
    let total = this.getTotal(this.selectedItems);
    console.log("selected - " + this.selectedItems.length + " | TOTAL : " + total + " | item[0].id : " + this.selectedItems[0].id);

    this.cartPayment = new CartPayment(null, null, null, null, null, null, total, this.selectedItems);
    this.shoppingCartService.pay(this.cartPayment)
      .takeUntil(this.destroy$)
      .subscribe((response) => {
        this.getCartItems();
        this.selectedItems.splice(0, this.selectedItems.length);
        this.subTotal = 0;
        this.alert.success({ text: 'Payment has been completed.' });
      },
        (error) => console.log(error)
    );
  }

  onSelect({ selected }) {
    this.selectedItems.splice(0, this.selectedItems.length);
    this.selectedItems.push(...selected);
    this.subTotal = this.getTotal(this.selectedItems);

    console.log("SELECTED - " + this.selectedItems.length);
  }

  getTotal(items: CartItem[]): number {
    let total = 0;

    for(let item of this.selectedItems){
      total += item.amount;
    }

    return total;
  }

  showHistory() {
    this.router.navigate([`/admin/shopping-cart/history`])
  }

  isFormValid() {
    return this.selectedItems.length > 0;
  }

  setPage(pageInfo) {
    this.loading = true;
    this.params.page = pageInfo.offset;
    this.getCartItems();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
