import { Component, OnInit } from '@angular/core';

import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public cartContent:any[] = [];

  public coursesList = courses;

  constructor() { }

  ngOnInit(): void {
    this.cartContent = JSON.parse(localStorage.getItem('cart') || '[]')
  }

  addToCart(id: string) {
    const course = this.cartContent.filter(course => course.id == id)[0];
    if (course) {
      course.quantity++;
    } else {
      this.cartContent.push({id: id, quantity: 1})
    }
    localStorage.setItem('cart', JSON.stringify(this.cartContent));
  }
}
