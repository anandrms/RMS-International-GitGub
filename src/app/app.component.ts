import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RMS-International';
  constructor(private http: HttpClient) { }
  get() {
    this.http.get('http://localhost:3000/home').subscribe((res) => {
      console.log(res)
    })
  }
  post() {
    this.http.post('http://localhost:3000/home', { name: "ajay" }).subscribe((res) => {
      console.log(res)
    })
  }
}
