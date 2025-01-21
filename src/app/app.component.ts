import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>{{title}}</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'This is whats is prompting';
}
