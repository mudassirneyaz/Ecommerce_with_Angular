import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonFunction } from '../common-function';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {
  cf =  new CommonFunction();
product_array :any=[]
  constructor(
   private productService: ProductService,
  ) {  }

  ngOnInit(): void {
    this.fetchProduct()
  }
  fetchProduct()
  {
    this.productService.productData().subscribe((resp)=>
    {
      this.product_array=resp;
    })
  }
  

}
