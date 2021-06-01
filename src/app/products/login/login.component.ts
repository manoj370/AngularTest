import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    // validations
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern(/^[^-\s][a-zA-Z ]*$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[^-\s][a-zA-Z0-9 ]*$/)]],
    });
  }

  ngOnInit(): void {


  }
  // validations
  get f() {
    return this.loginForm.controls;
  }
  // submit
  submit() {
    this.submitted = true;
  }
}
