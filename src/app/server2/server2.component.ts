import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server2]',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  serverName: string = "some text";
  serverName2: string = "some text 2";
  serverName3: string = "some text 3";
  serverNameTemp3: string = "";

  constructor() {}

  ngOnInit() {
  }

  onUpdateServerName(event: Event) {
    let value = (<HTMLInputElement>event.target).value;
    // console.log(value);
    this.serverName = value;

  }

  additionalNameServer() {
    this.serverName3 = this.serverNameTemp3;
  }

  onReset() {
    this.serverName3 = "";
    this.serverNameTemp3 = "";
  }

  isEnabled() {
    return this.serverName3 != "";
  }

  haveNameServer() {
    return this.serverName3 !== "";
  }

}
