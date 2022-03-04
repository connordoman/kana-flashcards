import { Component, Input, OnInit } from '@angular/core';
import { FlashcardDeck } from '../deck';
import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css'],
})
export class FlashcardComponent implements OnInit {
  @Input() cards?: FlashcardDeck;
  @Input() translated: boolean;

  constructor() {
    this.translated = false;
  }

  ngOnInit(): void {}
}
