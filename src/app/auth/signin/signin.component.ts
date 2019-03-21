import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private tokenService: AngularTokenService
  ) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    // console.log(email, password);
    this.tokenService.signIn({
      login: email,
      password: password
    }).subscribe(
      res => {

        console.log('auth response:', res);
        console.log('auth response headers: ', res.headers); //log the response header to show the auth token
        console.log('auth response body:', res.body); //log the response body to show the user 
      },

      err => {
        console.error('auth error:', err);
      }
    )
  }

}

// this.tokenService.signIn({login: "user@example.com", password: "monkey67"}).subscribe(

//   res => {

//     console.log('auth response:', res);
//     console.log('auth response headers: ', res.headers); //log the response header to show the auth token
//     console.log('auth response body:', res.body); //log the response body to show the user 
//   },

//   err => {
//     console.error('auth error:', err);
//   }
// )
// }