import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import { CourseService } from "src/app/services/course.service";

// import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartContent: any = [];
  totalPrice: number = 0;
  TAX_RATE: number = 0.2;

  constructor(
    private cartService: CartService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getCartContentDetails();
  }

  getCartContentDetails() {
    this.cartContent = this.cartService.cartContent;
    this.courseService.all().subscribe(
      res => {
        const courses = Object.values(res);
        for (let index = 0; index < this.cartContent.length; index++) {
          const course = courses.filter(course => course._id == this.cartContent[index].id)[0];
          this.cartContent[index].title = course.title;
          this.cartContent[index].price = course.price;
        }
        this.computeTotalPrice();
      }
    );
  }
  computeTotalPrice() {
  this.cartContent.forEach((item: { price: number; quantity: number; }) => {
      this.totalPrice += item.price * item.quantity;
    });
  }

  clearCart() {
    this.cartService.clear();
    this.ngOnInit();
  }

}
