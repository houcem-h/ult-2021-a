import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes), FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
