import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/components/header/services/data.service';
import { Store } from 'src/app/shared/components/interfaces/stores.interface';

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

  stores:Store[] = []
  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.getStores();
  }


  onPickupOrDelivery(value: boolean): void{
    this.isDelivery = value ;
  }

  onSubmit():void{
    console.log('Guardar')
  }

  private getStores():void {
    this.dataSvc.getStores()
    .pipe(
      tap((stores:Store[]) => this.stores = stores ))
    .subscribe()
  }
}
