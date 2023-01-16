import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <div app-server2></div>
    <div class="app-server3"></div>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
