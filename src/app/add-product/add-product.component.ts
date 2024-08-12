import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {
  addProductForm = new FormGroup({
    productName: new FormControl(),
    productPrize: new FormControl(),
    productImage: new FormControl(),
  })

  constructor(private service: HttpService) { }

  addProduct(event: any) {
    event?.preventDefault()
    const formData = new FormData()
    formData.append("productName", this.addProductForm.value.productName);
    formData.append("productPrize", this.addProductForm.value.productPrize);
    formData.append("productImage", this.addProductForm.value.productImage);
    this.service.addProduct(formData).subscribe((res) => {
      console.log(res)
    })
  }

  handleFileUpload(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      this.addProductForm.get("productImage")?.setValue(file)
    }
  }
}