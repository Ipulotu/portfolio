import { Component, OnInit } from '@angular/core';
import { Project } from '../../project'; 

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projects!: Array<Project>; 

  constructor() { }

  ngOnInit(): void {
    this.getProjects()
  }


  async getProjects(){
    let projects = [];
    let data = await this.getJSON("https://ipulotu.github.io/portfolio/app/src/assets/Data/projects.json");  
    for(let i = 0; i <= 4; i++){
      projects.push(data[i])
    }
    this.projects = projects ;
  }

  getJSON(url: string) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}



}
