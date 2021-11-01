import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: any;
password: any;
name: any;
phone: any;

@Input() login=true;
  constructor(
    private service : ProductService,
    private toastr : ToastrService,
    private auth : AuthService,
  ) { }

  ngOnInit(): void {
  }
  
  signupUser()
  {
    const payload = {
      email: this.email,
      password: this.password,
      name: this.name,
      phone: this.phone
    }
    this.service.signup(payload).subscribe((resp)=>
    {
      this.toastr.success('Signed Up successfully');
    })
  }
signIn(){
  const payload = {
    email: this.email,
    password: this.password
  }
  this.auth.loginUser(payload).subscribe((resp)=>
  {
    console.log("Logged in Successfully");
    this.toastr.success('Logged in Successfully');
  })

}

}
