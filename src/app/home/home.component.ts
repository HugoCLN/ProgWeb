import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public afficherPopup: boolean = true; 

  

  constructor() { }

  ngOnInit(): void {
    this.afficherPopup = false
  }

  switchPopup() {
    this.afficherPopup = ! this.afficherPopup;
  }
  fermerMaPopup(closePopup : boolean) {
    if (closePopup) {
      this.switchPopup();
    }
  }

}
