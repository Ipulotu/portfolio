import { Component, OnInit, Input} from '@angular/core';
import { Project } from '../../project'; 

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  string: string ="";
  idString: string = "";
  // [attr.data-target]="'#'+ string"


  constructor() { }

  ngOnInit(): void {
    this.string = `carouselExampleIndicators${this.project.id}`
    this.idString = `#${this.string}`
    console.log("project card created")
  }


  checkForGit(){
    if(this.project.gitUrl)
    return true;
    else 
    return false;
  }

}
