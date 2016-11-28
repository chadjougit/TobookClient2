import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title = "Login"; 
    loginForm = null;

    constructor(private fb: FormBuilder) {

        this.loginForm = fb.group({

            username: ["", Validators.required],

            password: ["", Validators.required]

        });

    }

    performLogin(e) {

        e.preventDefault();

        alert(JSON.stringify(this.loginForm.value));

    }

  ngOnInit() {
  }

}
