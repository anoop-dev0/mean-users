import { Injectable } from '@angular/core';
import { ServerApiService } from './server-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private api : ServerApiService) { }

  getUser(id){
    return this.api.get(`/users/${id}`);
  }
  getImage(src){
    return this.api.get(`/images/${src}`);
  }
  getUserList(){
    return this.api.get('/users');
  }
  postUser(data){
    return this.api.post('/users',data);
  }
  putUser(data,id){
    return this.api.put(`/users/${id}`,data);
  }
  deleteUser(id){
    return this.api.delete(`/users/${id}`);
  }

}
