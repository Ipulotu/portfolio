import { Component, OnInit } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  year = (new Date).getFullYear();
  lastupdated = new Date(document.lastModified).toLocaleDateString("en-US");
  isMenuCollapsed = true;
  

  constructor() { }
  
  
    ngOnInit(): void {
    }
   
  }
