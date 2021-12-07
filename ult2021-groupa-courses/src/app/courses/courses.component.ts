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
    this.cartContent.push(id)
    localStorage.setItem('cart', JSON.stringify(this.cartContent));
  }
}
