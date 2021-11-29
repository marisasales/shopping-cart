import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { FloatingCartComponent } from './floating-cart/floating-cart.component';
import { BuyButtonComponent } from './products/buy-button/buy-button.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { FinishShoppingComponent } from './finish-shopping/finish-shopping.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'form', component: CartFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingContainerComponent,
    CartComponent,
    ProductsComponent,
    FloatingCartComponent,
    BuyButtonComponent,
    CheckoutComponent,
    CartFormComponent,
    FinishShoppingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
