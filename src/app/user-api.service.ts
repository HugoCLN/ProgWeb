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

  getUsers(amount: number, male : boolean, female : boolean) {
    var gender : string = 'all'

    if(male == true)
    {
      if(female ==true) 
      {
        gender = 'all'
      }
      else{
        gender='male'
      }
    }
    else if(female == true){
      gender = 'female'
    }
    else{
      gender = 'all'
    }
    
    return this.http
      .get(`https://randomuser.me/api/?results=${amount}&gender=${gender}`)
      .pipe(map((res:any) => res.results))
  }
}
