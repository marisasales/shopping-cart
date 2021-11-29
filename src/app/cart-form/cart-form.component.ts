import { Component, OnInit } from '@angular/core';
import { PersistenceService } from '../shared/persistence.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private persistenceService: PersistenceService) {
    this.cartItems = this.persistenceService.loadFromLocalStorage();
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    alert('Sua compra foi finalizada com sucesso!');
    // this.persistenceService.saveToLocalStorage([]);
    console.log(form);
  }
}
