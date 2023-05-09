import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  year = (new Date).getFullYear();
  lastupdated = new Date(document.lastModified).toLocaleDateString("en-US");
  currentTheme:string = localStorage.getItem("theme") || "empty";
  

  constructor() { }
  
  
    ngOnInit(): void {
    
    }

   
  }
