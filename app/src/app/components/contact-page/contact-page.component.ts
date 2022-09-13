import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  title = 'Simple Example Contact-us page using Angular 4';
  public data:any=[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  save(name: string, email: string, mobile: string, subject: string, message: string): void {
    this.data['name']= name;
                this.data['email']= email;
                this.data['mobile']= mobile;
                this.data['subject']= subject;
                this.data['message']= message;
    console.log(this.data);
                //add request to send email or into mysql
                this.http.put('http://localhost/api/v1/update/', this.data).subscribe(
        res => {
          console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occurred.");
        }
      });
   }
}

