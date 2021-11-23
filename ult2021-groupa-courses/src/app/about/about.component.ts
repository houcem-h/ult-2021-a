import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public user1 = {
    name: "John Doe",
    age: "25",
    email: "john.doe@gmail.com"
  }

  public today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  public reverseName() {
    return this.user1.name.split('').reverse().join('');
  }

  public changeUserName() {
    this.user1.name = this.user1.name == "Jane Doe" ? "John Doe" : "Jane Doe";
  }


}
