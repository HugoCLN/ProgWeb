import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tinder-card',
  templateUrl: './tinder-card.component.html',
  styleUrls: ['./tinder-card.component.scss']
})
export class TinderCardComponent implements OnInit {

  @Input() user: User
  constructor() { }

  ngOnInit(): void {
  }

}
