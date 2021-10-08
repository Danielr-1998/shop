import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import {tap } from 'rxjs/operators';
import { product } from './interfaces/product.interface';
import { ShoppinCartService } from 'src/app/shared/components/header/services/shoppin-cart.services';
@Component({
  selector: 'app-products',
  template:`
    <section class='products'>
      <app-product 
          (addToCartClick)='addToCart($event)'
          [product]="product" 
          *ngFor="let product of products">
      </app-product>
    </section>
`,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: product[];
  constructor(private productSvc: ProductsService, private shoppinCartSvc:ShoppinCartService) { }

  ngOnInit(): void {

    this.productSvc.getProducts()
    .pipe(
      tap( (products: product[]) => this.products = products)
    )
    .subscribe();
  }

  addToCart(product: product ):void{
    console.log( 'Add to cart', product );
    this.shoppinCartSvc.updateCart(product);
  }

}
