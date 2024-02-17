import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Phone[] = []

  cartSubject = new BehaviorSubject<Phone[]>(this.cart);

  constructor() { }

  addPhoneToCart(phone:Phone) {
    this.cart.push(phone);
    this.cartSubject.next(this.cart);
  } 

  getAll() {
    return this.cartSubject.asObservable()
  }

  removeAll() {
    this.cart = []
    this.cartSubject.next(this.cart)
    return this.cartSubject.asObservable();
  }
}
