import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data: any;
  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.service.getProduct().subscribe(res => {
      console.log(res)
      this.data = res;
    })
  }
}
