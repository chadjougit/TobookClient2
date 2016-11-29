import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  title = "Login";
  loginForm = null;
  loginError = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {

    this.loginForm = fb.group({

      username: ["", Validators.required],

      password: ["", Validators.required]

    });

  }

  performLogin(e) {

    e.preventDefault();

    var username = this.loginForm.value.username;

        var password = this.loginForm.value.password;

        this.authService.login(username, password)

            .subscribe((data) => {

                // login successful

                this.loginError = false;

                var auth = this.authService.getAuth();

                alert("Our Token is: " + auth.access_token);

                this.router.navigate([""]);

            },

            (err) => {

                console.log(err);

                // login failure

                this.loginError = true;

            });

  
  }
}
