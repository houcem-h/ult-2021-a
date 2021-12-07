import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CartService } from "src/app/services/cart.service";

import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  public course?: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     const courseId = params.get('id');
     this.course = courses.filter(course => course.id == courseId)[0];
    });
  }

  addToCart(id: string) {
    this.cartService.add(id);
  }

}
