import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.printUser();
  }
  userDetails: any;
  printUser() {
    this.service.fetchProfile(17).subscribe((resp) => {
      this.userDetails = resp;
      console.log(this.userDetails)
    });
    
  }
}
