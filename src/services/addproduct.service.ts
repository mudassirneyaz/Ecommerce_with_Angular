import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  constructor(
    private http: HttpClient
  ) { }

  takeData(json){
  return  this.http.get('http://localhost:4200/add-product',json)
  }

  addProductImage(formData){
    return this.http.post('http://localhost:3000/uploadproduct', formData);
  }

  insertProduct(json){
    return this.http.post('http://localhost:3000/product',json);
  }

  fetchProduct(){
    return this.http.get('http://localhost:3000/getProduct');
  }

  fetchProductById(id){
    return this.http.get('http://localhost:3000/getProduct/'+id);
  }

  updateProduct(json){
    return this.http.post('http://localhost:3000/editProduct',json)
  }


}
