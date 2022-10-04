import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() closePopup = new EventEmitter<boolean>()

  loginform = new FormGroup({
    male : new FormControl(),
    female : new FormControl(),
    password : new FormControl(),
    email : new FormControl(),
  });

  constructor(private router: Router) { }

  

  ngOnInit(): void {
    this.loginform = new FormGroup({
      male : new FormControl(),
      female : new FormControl(),
      password : new FormControl(),
      email : new FormControl(),
    });
  }

  clicCroix() {
    this.closePopup.emit(true);
  }

  goToSwipe() {
    this.router.navigate(["/swipe"]);

    console.log("male : " + this.loginform.controls["male"].value);
    console.log("female : " + this.loginform.controls["female"].value);

    this.router.navigate(
      ['/swipe'],
      {queryParams: {
          male: this.loginform.controls['male'].value,
          female: this.loginform.controls['female'].value,
        }
      })
  }
}
