import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private tokenService: AngularTokenService
  ) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;
    console.log(email, password, password_confirmation);
    this.tokenService.registerAccount({
      login: email,
      password: password, 
      passwordConfirmation: password
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

