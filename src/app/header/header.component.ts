import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  login: boolean = false;
  loginStatus: boolean = true;
  signUpStatus: boolean  = true;
  isSession = this.auth.loggedInUserToken ? true:false;
  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    // console.log(JSON.parse(this.auth.loggedInUserValue));
    // console.log(this.auth.loggedInUserToken);
    console.log(this.isSession)
  }


  logout(){
    this.auth.logoutUser();
    console.log(this.auth.loggedInUserToken);
  }
  public get getToken()
  {
    return this.auth.loggedInUserToken;
  }
// value:any
  // sendData(value:any){
  //   this.value = value;
  // }
  didLogin: boolean = false;
  value:any;
isLoggedIn()
{
  this.auth.activated.subscribe((value)=>{
    this.value= this.didLogin
  })
}


}
