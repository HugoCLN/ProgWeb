import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() closePopup = new EventEmitter<boolean>()
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  clicCroix() {
    this.closePopup.emit(true);
  }

  goToSwipe() {
    this.router.navigate(["/swipe"]);
  }

}
