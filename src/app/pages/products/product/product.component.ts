import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product!:product;
  @Output() addToCartClick= new EventEmitter<product>();
  constructor() { }



  onClick(): void {
    
    this.addToCartClick.emit(this.product);
  }
}

