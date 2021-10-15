import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonFunction } from '../common-function';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  cf =  new CommonFunction();
  item:any;
  constructor(
    private productDesc: ProductService
  ) { }
desc_array: any;
  ngOnInit(): void {
    this.fetchProdDesc()
  }

  fetchProdDesc()
  {
    this.productDesc.productDesc().subscribe((resp)=>
    {
      this.desc_array=resp;
    })
  }

  changeImage(url:any)
    {
      this.item=url;
      console.log(url)
  }

  
  // defineArray = this.cf.defineArray
  // defineArray()
  // {

  // }
}
