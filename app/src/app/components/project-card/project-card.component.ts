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
  public summeryArray: any;
  public dotsId: any;
  public moreTextId: any;
  public btnTextId: any;
  btnHide: boolean = false;



  constructor() { }

  ngOnInit(): void {
    this.string = `carouselExampleIndicators${this.project.id}`
    if(this.project)
      this.summeryArray = this.splitString(this.project.summary)

    this.dotsId =  `dots${this.project.id}`;
    this.moreTextId = `moreText${this.project.id}`;
    this.btnTextId = `btnText${this.project.id}`;

  }
    
  ngAfterViewInit(): void {
    const bntPrev = document.querySelector( `#bnt-prev${this.project.id}`);
    const bntNext = document.querySelector(`#bnt-next${this.project.id}`)
    bntPrev!.setAttribute('data-bs-target', `#carouselExampleIndicators${this.project.id}`);
    bntNext!.setAttribute('data-bs-target', `#carouselExampleIndicators${this.project.id}`);

  
    var dots = document.getElementById(this.dotsId);
    var moreText = document.getElementById(this.moreTextId);
    var btnText = document.getElementById(this.btnTextId);

    if(this.btnHide){
      if(dots && btnText && moreText){
        dots.style.display = "none";
        moreText.style.display = "none";
        btnText.style.display = "none";
      }
      return
    }

    if(moreText)
      moreText.style.display = "none";
   

    btnText?.addEventListener("click",()=>{
      if(dots && btnText && moreText)
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
    })



  }





  splitString(str: string){
    let chunks = [];
    let i = 0;
    while (i < str.length) {
        let end = i + 140 < str.length ? i + 140 : str.length;
        // Find the next space
        while (end < str.length && str[end] !== ' ') {
            end++;
        }
        chunks.push(str.slice(i, end));
        i = end + 1;
        // remove bnt if less then 140 charctuers
        if(str.length < 200){
          this.btnHide = true;
        }
    }
    return chunks;
  }


  public showText(){

    var dots = document.getElementById(`dots${this.project.id}`);
    var moreText = document.getElementById(`moreText${this.project.id}`);
    var btnText = document.getElementById(`btnText${this.project.id}`);

    if(dots && btnText && moreText)
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
  }


  checkForGit(){
    if(this.project.gitUrl)
    return true;
    else 
    return false;
  }

}
