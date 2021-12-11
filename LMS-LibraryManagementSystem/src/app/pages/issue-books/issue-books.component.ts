import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

interface course {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-issue-books',
  templateUrl: './issue-books.component.html',
  styleUrls: ['./issue-books.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})

export class IssueBooksComponent implements OnInit {

  courses: course[] = [
    {value: 'course-0', viewValue: 'BSIT - Banchelor of Science in Information Technology'},
    {value: 'course-1', viewValue: 'BSCE - Bachelor of Science in Civil Engineering'},
    {value: 'course-2', viewValue: 'BSA - Bachelor of Science in Accountancy'},
    {value: 'course-3', viewValue: 'BSM - Bachelor of Science in Marketing'},
    {value: 'course-4', viewValue: 'BSMATH - Bachelor of Science in Mathematics'},
    {value: 'course-5', viewValue: 'BSME - Bachelor of Science in Mechanical Engineering'},
    {value: 'course-6', viewValue: 'BSARCH - Bachelor of Science in Architecture'},
    {value: 'course-7', viewValue: 'BSID - Bachelor of Science in Interior Design'},
    {value: 'course-8', viewValue: 'BSIENG - Bachelor of Science in Industrial Engineering'},
    {value: 'course-9', viewValue: 'BSMARE - Bachelor of Science in Marine Engineering'},
    
  ];

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
  }
}