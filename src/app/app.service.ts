import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://fakestoreapi.com/users');
  }

  getUser(userId: string){
    return this.http.get(`https://fakestoreapi.com/users/${userId}`);
  }
}
