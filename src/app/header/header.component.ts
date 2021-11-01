import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: boolean = false;
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

}
