import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    
  ) {}

  showComponent = true;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  librarianid = new FormControl('', [Validators.required, Validators.nullValidator]);

  getErrorMessage() {
    if (this.librarianid.hasError('required')) {
      return 'Librarian ID is required';
    }

    return this.librarianid.hasError('librarianid') ? '' : '';
  }


  ngOnInit(): void {
  }

}