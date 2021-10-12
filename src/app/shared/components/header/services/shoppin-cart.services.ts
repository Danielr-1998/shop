import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { product } from "src/app/pages/products/interfaces/product.interface";
@Injectable(
  {providedIn:'root'}  
)

export class ShoppinCartService {
    products: product[]= [];

    private cartSubject = new BehaviorSubject<product[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);
    private quantitySubject = new BehaviorSubject<number>(0);

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
        const isProductIncart = this.products.find(({id}) => id === product.id )
        if(isProductIncart){
            isProductIncart.qty += 1;
        }else {
            this.products.push({...product , qty: 1})
            //undefined
        }
      
        this.cartSubject.next(this.products);

    }

    private quantityProducts(): void{
        const quantity = this.products.reduce((acc,prod) => acc += prod.qty,0) ;
        this.quantitySubject.next(quantity);
    }

    private calcTotal(): void{
        const total = this.products.reduce((acc,prod) => acc += (prod.price * prod.qty), 0 );
        this.totalSubject.next(total);
    }


}