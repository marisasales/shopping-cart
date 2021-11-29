import { Component, OnInit } from '@angular/core';
import { PersistenceService } from '../shared/persistence.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice = 0;;
  hasItems: boolean = this.cartItems.length > 0 ? true : false;

  constructor(private persistenceService: PersistenceService) {
    this.cartItems = this.persistenceService.loadFromLocalStorage();
  }

  ngOnInit(): void {
    this.setTotalPrice();
  }

  clearCart() {
    this.totalPrice = 0;
  };

  setTotalPrice() {
    this.totalPrice = this.cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }

  subtract(item: any) {
    if (item.quantity > 1) {
      this.totalPrice -= item.price;
      item.quantity--;
    } else {
      this.cartItems.splice(this.cartItems.indexOf(item), 1);
      this.setTotalPrice();
    }

    this.persistenceService.saveToLocalStorage(this.cartItems);
  }

  add(item: any) {
    this.totalPrice += item.price;
    item.quantity++;
    this.persistenceService.saveToLocalStorage(this.cartItems);
  }
}
