import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes_blog: Routes = [
  {
    path: "",
    component: MainComponent
  }
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class BlogRoutingModule { }
