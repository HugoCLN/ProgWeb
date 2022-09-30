import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http
      .get('https://randomuser.me/api/?results=20')
  }

  getUsers(amount: number) {
    return this.http
      .get(`https://randomuser.me/api/?results=${amount}`)
      .pipe(map((res:any) => res.results))
  }
}
