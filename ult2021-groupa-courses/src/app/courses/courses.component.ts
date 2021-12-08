import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import { CourseService } from "src/app/services/course.service";

import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList: any = [];

  constructor(
    private cartService: CartService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.all().subscribe(
      res => this.coursesList = res
    );
  }

  addToCart(id: string) {
    this.cartService.add(id);
  }
}
