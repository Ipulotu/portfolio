import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../project'; 
import { projectsList } from '../../../assets/Data/projects';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projects:  any;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;
  constructor() { }

  ngOnInit(): void {
    // this.getProjects()
    this.projects = projectsList();
    console.log( this.projects);
    if(this.carousel != undefined){
      this.carousel.pause();
    }
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if(this.carousel != undefined){
      this.carousel.pause();
    }
	}
  // async getProjects(){
  //   let projects = [];
  //   let data = await this.getJSON("https://ipulotu.github.io/portfolio/app/src/assets/Data/projects.json");  
  //   for(let i = 0; i <= 4; i++){
  //     projects.push(data[i])
  //   }
  //   this.projects = projects ;
  // }

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
