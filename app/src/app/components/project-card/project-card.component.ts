import { Component, OnInit, Input, ElementRef, ViewChild,} from '@angular/core';
import { Project } from '../../project'; 

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  string: string ="";

  constructor() { }

  ngOnInit(): void {
    this.string = `carouselExampleIndicators${this.project.id}`
  }
    
  ngAfterViewInit(): void {
    const bntPrev = document.querySelector( `#bnt-prev${this.project.id}`);
    const bntNext = document.querySelector(`#bnt-next${this.project.id}`)
    bntPrev!.setAttribute('data-bs-target', `#carouselExampleIndicators${this.project.id}`);
    bntNext!.setAttribute('data-bs-target', `#carouselExampleIndicators${this.project.id}`);
  
  }








  checkForGit(){
    if(this.project.gitUrl)
    return true;
    else 
    return false;
  }

}
