import { Component, OnInit } from '@angular/core';
import { ShoppinCartService } from 'src/app/shared/components/header/services/shoppin-cart.services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  total$ = this.shoppingCartSvc.totalAction$;
  cart$ =this.shoppingCartSvc.cartAction$ ;
  constructor(private shoppingCartSvc: ShoppinCartService) { }

  ngOnInit(): void {
  }

}
