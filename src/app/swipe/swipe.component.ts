import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
})
export class SwipeComponent implements OnInit {

  nbusers : number = 5
  user_index : number = 0
  credits: number = 5

  male : boolean = true
  female : boolean = true

  users: Array<User>
  fav_users : Array<User>

  constructor(
    private userApi: UserApiService,
    private route : ActivatedRoute 
    ) { }

  ngOnInit(): void {
    this.fav_users = []

    // faire la gestion de la route pour le genre des profils
    // recuperer male et female depuis la route
    this.route.queryParams.subscribe(params => {
      this.male = (params['male'] == "true") ? true : false
      this.female = (params['female'] == "true") ? true : false

    this.getUsers(this.nbusers)

    })

  }

  getUsers(amount: number){
    this.userApi.getUsers(amount, this.male, this.female).subscribe((results: Array<User>) =>{
      this.users = results;
      this.user_index = 0;
    });
  }

  next_person(button_pushed:boolean, user: User)
  {
    if (this.user_index < this.nbusers) {
      // si il reste des profils a afficher passer au profil suivant
      this.user_index = this.user_index + 1;

      if (button_pushed) {
        // si like alors on ajoute le profil a la liste des profils favoris
        this.add_favuser(user);
      }
    }
  }

  add_favuser(user : User)
  {
    this.fav_users.push(user)
  }

  reload_users() {
    // permet de recharger une liste de profils
    if (this.credits > 0) {
      this.getUsers(this.nbusers);
      this.credits--;
    }  
  }
}
