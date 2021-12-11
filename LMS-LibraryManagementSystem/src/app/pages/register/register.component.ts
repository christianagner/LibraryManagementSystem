import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  librarianid = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.librarianid.hasError('required')) {
      return 'You must enter a value';
    }

    return this.librarianid.hasError('librarianid') ? 'Not a valid Librarian ID' : '';
  }

  ngOnInit(): void {
  }

}
