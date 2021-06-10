import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  showpassword = false;
  eyeShow = false;
  constructor(private fb: FormBuilder,private router:Router) {
    // validations
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern(/^[^-\s][a-zA-Z ]*$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[^-\s][a-zA-Z0-9@*$ ]*$/)]],
    });
  }

  ngOnInit(): void {


  }
  // validations
  get f() {
    return this.loginForm.controls;
  }
  // Password Eye Icon
  eyeToggel() {
    this.showpassword = !this.showpassword;
    this.eyeShow = !this.eyeShow;
  }
  // submit
  submit() {
    this.submitted = true;
    if(this.loginForm.valid){
      this.router.navigate(['/list', { sortType: 'hightolow'}]);
    }else{
      alert('Please Enter Valid Details');
    }
  }
}
