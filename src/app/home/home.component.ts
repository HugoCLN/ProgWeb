import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public afficherPopup: boolean = true; 

  

  constructor() { }

  ngOnInit(): void {                //Initialisation de la pop up, pour qu'elle ne s'affiche pas au démarrage
    this.afficherPopup = false
  }

  switchPopup() {                   //Fonction exécutée afin d'ouvrir la pop up, au moment de l'appui sur le bouton connexion
    this.afficherPopup = ! this.afficherPopup;
  }

  fermerMaPopup(closePopup : boolean) {   //Fonction pour fermer la pop up
    if (closePopup) {
      this.switchPopup();
    }
  }

}
