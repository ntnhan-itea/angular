import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server3',
  templateUrl: './server3.component.html',
  styleUrls: ['./server3.component.css']
})
export class Server3Component implements OnInit {

  elements = ["a","x","f","g"];

  constructor() {}

  ngOnInit() {
  }

  getColor() {
    return 'red';
  }
}
