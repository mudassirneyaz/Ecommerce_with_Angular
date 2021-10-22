import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: any;
password: any;
name: any;
@Input() login=true;
  constructor(
    private service : ProductService,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
  }
  
  signupUser()
  {
    const payload = {
      email: this.email,
      password: this.password,
      name: this.name
    }
    this.service.signup(payload).subscribe((resp)=>
    {
      this.toastr.success('Signed Up successfully');
    })
  }
  showtost()
  {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
