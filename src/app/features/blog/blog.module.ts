import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [MainComponent]
})
export class BlogModule { }
