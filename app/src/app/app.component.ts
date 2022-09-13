import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  year = (new Date).getFullYear();
  lastupdated = new Date(document.lastModified).toLocaleDateString("en-US");
  

}
