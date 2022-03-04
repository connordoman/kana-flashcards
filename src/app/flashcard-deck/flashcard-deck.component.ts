import { Component, OnInit } from '@angular/core';
import { DeckSettings, FlashcardDeck } from '../deck';

@Component({
  selector: 'app-flashcard-deck',
  templateUrl: './flashcard-deck.component.html',
  styleUrls: ['./flashcard-deck.component.css'],
})
export class FlashcardDeckComponent implements OnInit {
  static deckSettings: DeckSettings = {
    useHiragana: true,
    useKatakana: false,
    useKanjiNumbers: false,
    showDakuten: false,
    showHandakuten: false,
  };
  deck: FlashcardDeck;

  constructor() {
    this.deck = new FlashcardDeck(FlashcardDeckComponent.deckSettings);
    this.deck.createDeck();
    this.deck.shuffle();
  }

  ngOnInit(): void {}
}
