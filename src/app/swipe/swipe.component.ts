import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss']
})
export class SwipeComponent implements OnInit {

  nbusers : number = 20
  user_index : number = 0
  users: Array<User>
  favusers : Array<User>

  constructor(private userApi: UserApiService) { }

  ngOnInit(): void {
    this.getUsers(this.nbusers)
  }

  getUsers(amount: number){
    this.userApi.getUsers(amount).subscribe((results: Array<User>) =>{
      this.users = results
    });
  }

  next_person(button_pushed:boolean, user: User)
  {
    if(this.user_index < this.nbusers){
      this.user_index = this.user_index + 1;
    }
    else{
      this.getUsers(this.nbusers);
      this.user_index = 0;
    }

    if (button_pushed){
      this.add_favuser(user);

    }
  }

  add_favuser(user : User)
  {
    this.favusers.push(user)
  }
}
