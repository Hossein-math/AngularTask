import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, isFormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userForm: FormGroup = this.formBuilder.group({
    id: [''],
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

 constructor(private formBuilder: FormBuilder) {}

  login(username: string, password:string) {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem(username, password)
    } else {

    }
  }
}
