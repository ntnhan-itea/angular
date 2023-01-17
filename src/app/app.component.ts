import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'my-dream-app';
  name: string;
  position: string = 'Branch Director';
  color: string = 'red';
  allowButton: boolean = false;

  getPosition() {
    return this.position;
  }

  changeColor() {
    if (this.color === 'red') {
      this.color = 'blue';
    } else {
      this.color = 'red';
    }
  }

  changeAllow() {
   this.allowButton = !this.allowButton;
  }
}
