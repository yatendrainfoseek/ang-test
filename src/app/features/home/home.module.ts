import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home-routing.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [MainComponent, ContactComponent]
})
export class HomeModule { }
