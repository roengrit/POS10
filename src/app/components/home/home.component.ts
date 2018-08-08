import { Component, OnInit } from '@angular/core';
import { AppheaderComponent    } from '../appheader/appheader.component';
 
declare var Chart: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private title : string
  constructor() { }

  ngOnInit() {
    this.title = 'Home'
  }

 
}
