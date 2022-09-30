import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss']
})
export class SwipeComponent implements OnInit {

  users: Array<User>

  constructor(private userApi: UserApiService) { }

  ngOnInit(): void {
    this.getUsers(1);
  }

  getUsers(amount: number){
    this.userApi.getUsers(amount).subscribe((results: Array<User>) =>{
      this.users = results;
    });
  }




}
