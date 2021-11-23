import { Component, OnInit } from '@angular/core';

import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList = courses;

  constructor() { }

  ngOnInit(): void {
    console.log(this.coursesList);
  }

}
