import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {

  constructor(private http : HttpClient) { }

  getjsonHeaders(){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    // const token = localStorage.getItem('token');
    // if(token){
    //   headers = headers.append('authorization', `Bearer ${token}`);
    // }
    return headers;
  }
  getMultipartHeaders(){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'multipart/form-data;');
    headers = headers.append('Accept','*/*')
    // const token = localStorage.getItem('token');
    // if(token){
    //   headers = headers.append('authorization', `Bearer ${token}`);
    // }
    return headers;
  }

  get(url){
    return this.http.get(`${environment.apiUrl}${url}`,{headers:this.getjsonHeaders()});
  }

  post(url,data){
    console.log(data);
    return this.http.post(`${environment.apiUrl}${url}`, data);
    //return this.http.post(`${environment.apiUrl}${url}`, data);
  }
  put(url,data){
    debugger
    return this.http.put(`${environment.apiUrl}${url}`, data, {headers:this.getjsonHeaders()});
    //return this.http.post(`${environment.apiUrl}${url}`, data);
  }
  delete(url){

    return this.http.delete(`${environment.apiUrl}${url}`, {headers:this.getjsonHeaders()});
    //return this.http.post(`${environment.apiUrl}${url}`, data);
  }
}
