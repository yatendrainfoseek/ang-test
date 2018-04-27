import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
   path: '',
   component: MainComponent 
  },
  {
    path:'contact',
    component: ContactComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class HomeRoutingModule { }
