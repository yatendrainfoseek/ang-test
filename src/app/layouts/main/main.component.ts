import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  title = 'appbhgggu';
  value = true;
  arr: any = []

  changevalue(){
    if(this.value)
      this.arr = ['sdcds', 'asdsad', 'zxczxc'];
    else
    this.arr = ['Asdcds', 'Aasdsad', 'Azxczxc'];
    this.value = !this.value;
  }

  ngOnInit() {
  }

}
