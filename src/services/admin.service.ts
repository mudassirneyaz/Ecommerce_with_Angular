import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import swal from "sweetalert2";
import { Router } from '@angular/router';

// import { generalModel, icons, menu, BtnText, permission, tabArray, optionArray } from '../shared/models/general.model';
import { Subject } from 'rxjs';
import { apiUrl } from '../global/global';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiEndpoint: string = '';
  showLoader: boolean = true;
  access_token: any;
  // icon = icons;
  // menu = menu;
  // btnText = BtnText;
  // generalModel = new generalModel();
  // Permission = permission;
  public _albums = [];
  constructor(private http: HttpClient, private router: Router) {
    this.apiEndpoint = environment.apiUrl;
    this.access_token = localStorage.getItem('access_token');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  getData(url, param) {
    return this.http.get<any>(this.apiEndpoint + url, { params: param });
  }
  getDatas(url) {
    return this.http.get<any>(this.apiEndpoint + url);
  }
  getDetail(url, param) {
    return this.http.get<any>(this.apiEndpoint + url, { params: param });
  }
  getDetail1(url, param) {
    return this.http.get<any>(this.apiEndpoint + url, { params: param });
  }
  getDetailByid(data, url) {
    return this.http.get<any>(this.apiEndpoint + url + data.id,{});
  }
  putData(url, param) {
    return this.http.put<any>(this.apiEndpoint + url, param);
  }
  postData(url, value) {
    return this.http.post<any>(this.apiEndpoint + url, value);
  }
  upateData(url, value) {
    return this.http.put<any>(this.apiEndpoint + url, value);
  }
  patchUpdate(url, value) {
    return this.http.patch<any>(this.apiEndpoint + url, value);
  }
  postUpdate(url, value) {
    return this.http.put<any>(this.apiEndpoint + url, value);
  }

  postNewData(url, key, value) {
    return this.http.post<any>(this.apiEndpoint + url, key, value);
  }
  updateData(url, value) {
    return this.http.patch<any>(this.apiEndpoint + url, value);
  }

  // deleteData(url, value) {
  //   return this.http.delete<any>(this.apiEndpoint +url, value);
  // }

  deleteData(url, param) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:param,
    };
    return this.http.delete<any>(this.apiEndpoint + url, options);
  }

  showAlert(title: string, text: string) {
    swal.fire({
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 2500
    });
  }



  errorAlert(text, status) {
    swal.fire({
      title: 'Oops...',
      text: text,
    }).then((result) => {
      if (status) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('type-redirect');
        localStorage.removeItem('image');
        localStorage.removeItem('permissionData');
        localStorage.removeItem('userDetails');
        localStorage.removeItem('loginDetails');
        this.router.navigate(['/']);
      }
    })
  }



  // Show and hide Loader
  private loaderSubject = new Subject<Boolean>();
  loaderState = this.loaderSubject.asObservable();

  loader(value) { this.loaderSubject.next(value); }

  // setdata(data) {
  //   for (let x of tabArray) {
  //     let array1 = {}
  //     for (let y of x.value) {
  //       array1[optionArray[y].name] = (data[x.name] == undefined || data[x.name][optionArray[y].name] == undefined ? false : data[x.name][optionArray[y].name]);
  //     }
  //     permission[x.name] = array1;
  //   }
  //   permission['status'] = "updated";
  //   return true;
  // }

}
