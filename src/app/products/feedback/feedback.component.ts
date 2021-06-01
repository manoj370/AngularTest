import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    // validations
    this.feedbackForm = this.fb.group({
      Name: ['', [Validators.required, Validators.pattern(/^[^-\s][a-zA-Z ]*$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[^-\s][a-zA-Z@0-9. ]*$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[^-\s][0-9 ]*$/)]],
      feedbackContent: ['', [Validators.required, Validators.pattern(/^[^-\s][a-zA-Z ]*$/)]],
    });
  }

  ngOnInit(): void {


  }
  // validations
  get f() {
    return this.feedbackForm.controls;
  }
  // submit
  submit() {
    this.submitted = true;
    localStorage.setItem('Name', this.feedbackForm.value.Name);
    localStorage.setItem('Email', this.feedbackForm.value.email);
    localStorage.setItem('Phone', this.feedbackForm.value.phone);
    localStorage.setItem('Feedbackcontent', this.feedbackForm.value.feedbackContent);
  }
  // clearing form
  cancel() {
    this.feedbackForm.reset();
    localStorage.clear();
  }

}
