import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private admin:AdminService){}
  canActivate()  {
    let token = localStorage.getItem("accessToken");   
    if (token) {
      return true;
    }
   
    this.router.navigate(['']);   
    return false;
  }
}
