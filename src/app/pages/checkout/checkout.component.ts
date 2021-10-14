import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/components/header/services/data.service';
import { ShoppinCartService } from 'src/app/shared/components/header/services/shoppin-cart.services';
import { Details, Order } from 'src/app/shared/components/interfaces/order.interface';
import { Store } from 'src/app/shared/components/interfaces/stores.interface';
import { product } from '../products/interfaces/product.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  model = {
    name:'danie',
    store:'',
    shippingAddress:'',
    city: ''
  };

  isDelivery= true;
  cart: product[] = [];
  stores:Store[] = []
  constructor(private dataSvc: DataService, private shoppinCartSvc: ShoppinCartService) { }

  ngOnInit(): void {
    this.getStores();
    this.getDataCart;
    this.prepareDetails;
  }


  onPickupOrDelivery(value: boolean): void{
    this.isDelivery = value ;
  }

  onSubmit({value:formData}:NgForm):void{
    console.log('Guardar',formData);
    const data:Order ={
      ...formData,
      date:this.getCurrentDay(),
      pickup: this.isDelivery
    }
    this.dataSvc.saveOrder(data)
    .pipe(
      tap(res => console.log('Order ->',res)),
      switchMap((order) => {
        const orderId = order.id;
        const details = this.prepareDetails();
        return this.dataSvc.saveDatailsOrder({details, orderId});

      }),
      tap(res => console.log('finish ->',res)),
      )
    
    .subscribe();
    
  }

  private getStores():void {
    this.dataSvc.getStores()
    .pipe(
      tap((stores:Store[]) => this.stores = stores ))
    .subscribe()
  }

  private getCurrentDay():string{
      return new Date().toLocaleDateString()
  }

  private prepareDetails(){
    const details: Details[] = [];
    this.cart.forEach((product:product)=> {
      const {id:productId, name:productName ,qty:quantity ,stock}= product;
      details.push({productId,productName,quantity});
      
 
    })
    return details;
  }

  private getDataCart():void {
    this.shoppinCartSvc.cartAction$
    .pipe(
      tap((products: product[])=> this.cart=products)
    )
    .subscribe()
  }
}
