import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  private course?: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     const courseId = params.get('id');
     this.course = courses.filter(course => course.id == courseId)[0];
    });
  }

}
