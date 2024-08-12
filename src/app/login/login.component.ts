import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  constructor(private http: HttpClient) { }

  post() {
    this.http.post('http://localhost:3000/login', this.loginForm.value).subscribe((res) => {
      console.log(res)
    })
  }


  get(){
    this.http.get("http://localhost:3000/login/product").subscribe((res) =>
    {
      console.log(res)
    })
  }
}
