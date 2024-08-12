import { Component , OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  data: any;
doorNo: any;
  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.service.userList().subscribe(res => {
      console.log(res)
      this.data = res;
    })
  }
}
