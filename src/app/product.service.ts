import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 baseUrl = environment.baseUrl;
  products = [
    {
        id: 1,
        name: 'Dell Laptop',
        mrp: 19999,
        sellingPrice: 800,
        imageUrl: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588652_5.png',
        rating: 3
    },
    {
        id: 2,
        name: 'Dell Laptop',
        mrp: 19999,
        sellingPrice: 800,
        imageUrl: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588652_5.png',
        rating: 3
    },
    {
        id: 3,
        name: 'Dell Laptop',
        mrp: 19999,
        sellingPrice: 800,
        imageUrl: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588652_5.png',
        rating: 3
    },
    {
        id: 4,
        name: 'Dell Laptop',
        mrp: 19999,
        sellingPrice: 800,
        imageUrl: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588652_5.png',
        rating: 3
    },
    {
        id: 5,
        name: 'Dell Laptop',
        mrp: 19999,
        sellingPrice: 800,
        imageUrl: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588652_5.png',
        rating: 3
    },
    {
        id: 6,
        name: 'Dell Laptop',
        mrp: 19999,
        sellingPrice: 800,
        imageUrl: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588652_5.png',
        rating: 3
    },
    {
        id: 7,
        name: 'Dell Laptop',
        mrp: 19999,
        sellingPrice: 800,
        imageUrl: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588652_5.png',
        rating: 3
    }
]

productDescDate = 
  {
    id: 1,
    imageArray: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80','https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1251&q=80','https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80','https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06588652_5.png'],
    prodctName: 'MekBook Puro',
    prodDesc: 'This is my new laptop known as mekbook puro',
    rating: 3
  }

  constructor(
    private http : HttpClient
  ) { 
  
  }
  productData()
  {
    return of(this.products);
  }
  productDesc()
  {
    return of(this.productDescDate);
  }

  signup(json: any)
  {
    return this.http.post(this.baseUrl+'/signup',json)
  }
}
