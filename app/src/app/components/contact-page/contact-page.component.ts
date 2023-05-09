import { Component,   VERSION} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})

export class ContactPageComponent {
  title = "Formspree.io Angular " + VERSION.major + " Example";
  secretKey: string = "myyaokrq";

  emailForm = this.fb.group({
    name: [""],
    email: [""],
    message: [""]
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router,  private toastr: ToastrService) {}

  //Send an email using formspree.io account
  sendEmail(name: String, email: String, message: String) {
    
    //Set the url with your secretKey from formspree.io
    let url = "https://formspree.io/f/" + this.secretKey;

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `name=${name}&email=${email}&message=${message}`;
    let errorMessage: string = "";
    
    this.httpClient.post<any>(url, data, httpOptions).subscribe({
        next: data => {
            console.log("email sent" + JSON.stringify(data));
            this.router.navigate(['home'])
            this.toastr.success("Message sent", 'SUCCESS');
        },
        error: error => {
            errorMessage = error.message;
            console.log('error!', errorMessage);
            this.router.navigate(['home'])
            this.toastr.error("Message not sent", 'ERROR');
        }
    })
  }
}
