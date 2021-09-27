import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('https://fakestoreapi.com/users');
  }

  getUser(userId: string){
    return this.http.get<User>(`https://fakestoreapi.com/users/${userId}`);
  }
}
