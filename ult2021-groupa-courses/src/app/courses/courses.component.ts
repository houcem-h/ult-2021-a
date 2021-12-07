import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";

import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList = courses;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  addToCart(id: string) {
    this.cartService.add(id);
  }
}
