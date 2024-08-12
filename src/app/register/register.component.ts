import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

constructor(private service:HttpService){}
  registerForm=new FormGroup({
    name:new FormControl(''),
    phone:new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    userName: new FormControl(''),
    address: new FormGroup({   
      doorNo: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      district: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
    }),
  })
  onSubmit(){
    this.service.registerUser(this.registerForm.value).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
