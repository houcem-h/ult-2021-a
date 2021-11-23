import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  public img404src = "assets/404-not-found.png";

  constructor() { }

  ngOnInit(): void {
  }

}
