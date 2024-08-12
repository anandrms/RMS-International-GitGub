import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  registerUser(data: any) {
    return this.http.post('http://localhost:3000/register', data)
  }

  userList() {
    return this.http.get('http://localhost:3000/register')
  }

  addProduct(data: any) {
    return this.http.post("http://localhost:3000/product", data)
  }

  getProduct() {
    return this.http.get('http://localhost:3000/product')
  };


}

