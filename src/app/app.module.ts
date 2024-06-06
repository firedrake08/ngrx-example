import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { appReducer } from './store/app.state';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ProductsCartComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
