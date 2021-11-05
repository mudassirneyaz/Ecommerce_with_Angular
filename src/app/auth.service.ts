import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private loggedUserSubject: BehaviorSubject<any>;
  private loggedTokenSubject: BehaviorSubject<any>;
  public loggedInUser: Observable<any>;
  public loggedToken: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    const getLoggedUser: any = localStorage.getItem('loggedInUser');
    const getToken: any = localStorage.getItem('token');
    this.loggedUserSubject = new BehaviorSubject(getLoggedUser);
    this.loggedInUser = this.loggedUserSubject.asObservable();
    this.loggedTokenSubject = new BehaviorSubject(getToken);
    this.loggedToken = this.loggedTokenSubject.asObservable();
  }
  loginUser(json: any) {
    return this.http.post<any>(this.baseUrl + '/login', json).pipe(
      map((response) => {
        localStorage.setItem('loggedInUser', JSON.stringify(response.data));
        localStorage.setItem('token', response.token);
        this.loggedUserSubject.next(response);
        console.log(response);
        this.loggedTokenSubject.next(response.token);
        return response;
      })
    );
  }

  public get loggedInUserValue(){
    return this.loggedUserSubject.value;
}
public get loggedInUserToken(){
  return this.loggedTokenSubject.value;
}
logoutUser() {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('token');
  this.loggedUserSubject.next(null);
  this.loggedTokenSubject.next(null);
  this.router.navigate(['/']);
}
activated= new EventEmitter<boolean>();
}
