import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { flatMap } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-tinder-card',
  templateUrl: './tinder-card.component.html',
  styleUrls: ['./tinder-card.component.scss']
})
export class TinderCardComponent implements OnInit {

  @Input() user: User
  @Output() button_pushed = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  onLike(){
    this.button_pushed.emit(true)
  }

  onSuperLike(){
    this.button_pushed.emit(true)
  }

  onDislike(){
    this.button_pushed.emit(false)
  }

}
