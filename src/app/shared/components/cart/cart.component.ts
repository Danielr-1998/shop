import { Component } from "@angular/core";
import { ShoppinCartService } from "../header/services/shoppin-cart.services";
@Component({
    selector: 'app-cart',
    template: `
    <ng-container *ngIf="{total: total$ | async , quantity: quantity$ | async } as dataCart">
        <ng-container *ngIf="dataCart.total">
         <mat-icon>add_shopping_cart</mat-icon > 
        {{dataCart.total | currency}}
        ({{dataCart.quantity}})
        </ng-container>
    </ng-container>`
}
)

export class CartComponent{
    quantity$ = this.shoppingCartSvc.quiantityAction$;
    total$ = this.shoppingCartSvc.totalAction$;
    cart$ = this.shoppingCartSvc.cartAction$;
  
    constructor(private shoppingCartSvc: ShoppinCartService){

}
}