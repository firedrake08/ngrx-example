import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToCart } from '../store/cart/cart.actions';
import { Product } from '../store/cart/cart.actions';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.css'],
})
export class ProductsCartComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 599.99 },
    { id: 3, name: 'Headphones', price: 129.99 },
    { id: 4, name: 'Wireless Mouse', price: 49.99 },
    { id: 5, name: 'External Hard Drive', price: 79.99 }
  ];
  cart$: Observable<Product[]>;

  constructor(private store: Store<{ cart: Product[] }>) {
    this.cart$ = store.select('cart');
  }

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.store.dispatch(addToCart({ product }));
  }
}
