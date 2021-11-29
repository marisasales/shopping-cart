import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  constructor() { }

  saveToLocalStorage(cartItems: any[]): void {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  loadFromLocalStorage(): string[] {
    return JSON.parse(localStorage.getItem('cartItems') ?? '[]');
  }
}
