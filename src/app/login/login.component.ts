import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() closePopup = new EventEmitter<boolean>()
  constructor() { }


  ngOnInit(): void {
  }

  clicCroix() {
    this.closePopup.emit(true);
  }

}
