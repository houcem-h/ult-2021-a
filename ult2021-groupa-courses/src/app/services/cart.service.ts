import { Injectable } from '@angular/core';

import { LocalStorageService } from "src/app/services/local-storage.service";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartContent:any[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.cartContent = this.load();
   }

   add(id: string) {
    const course = this.cartContent.filter(course => course.id == id)[0];
    if (course) {
      course.quantity++;
    } else {
      this.cartContent.push({id: id, quantity: 1})
    }
    this.localStorageService.set('cart', this.cartContent);
   }

   load() {
    return this.localStorageService.get('cart');
   }
}
