import { NgIf } from "@angular/common";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { product } from "src/app/pages/products/interfaces/product.interface";
@Injectable(
  {providedIn:'root'}  
)

export class ShoppinCartService {
    products: product[]= [];

    private cartSubject = new Subject<product[]>();
    private totalSubject = new Subject<number>();
    private quantitySubject = new Subject<number>();

    get totalAction$(): Observable<number>{
        return this.totalSubject.asObservable();

    }
    get quiantityAction$(): Observable<number>{
        return this.quantitySubject.asObservable();

    }
    get cartAction$(): Observable<product[]>{
        return this.cartSubject.asObservable();
        
    }

    updateCart(product:product):void{
        this.addToCart(product);
        this.quantityProducts();
        this.calcTotal();
    }

    private addToCart(product:product):void{
        this.products.push(product);
        this.cartSubject.next(this.products);

    }

    private quantityProducts(): void{
        const quantity = this.products.length ;
        this.quantitySubject.next(quantity);
    }

    private calcTotal(): void{
        const total = this.products.reduce((acc,prod) => acc += prod.price, 0 );
        this.totalSubject.next(total);
    }


}