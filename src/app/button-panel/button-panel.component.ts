import { Component, Input, OnInit } from '@angular/core';
import { FlashcardDeck } from '../deck';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css'],
})
export class ButtonPanelComponent implements OnInit {
  @Input() deck?: FlashcardDeck;

  constructor() {}

  ngOnInit(): void {}

  lastCard() {
    if (this.deck) {
      this.deck.lastCard();
    }
  }

  nextCard() {
    if (this.deck) {
      this.deck.nextCard();
    }
  }
}
