export class CartItem {
  constructor(
    public id: number,
    public createdBy: string,
    public createdDate: Date,
    public updatedBy: string,
    public updatedDate: Date,
    public requestor: string,
    public name: string,
    public description: string,
    public amount: number,
    public merchantId: number,
    public processInstanceId: number,
    public activityId: number,
    public toBePayed: boolean
  ) {}
}

export class CartPayment {
  constructor(
    public id: number,
    public createdBy: string,
    public createdDate: Date,
    public updatedBy: string,
    public updatedDate: Date,
    public receiptNumber: string,
    public amount: number,
    public items: CartItem[]
  ) {}
}

// export class ShoppingCart {
//   constructor(
//     public items: Item[]
//   ) {}
// }
