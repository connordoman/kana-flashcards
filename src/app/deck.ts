import { Flashcard, KANA_CHARACTERS } from './flashcard';

export class FlashcardDeck {
  cards: Flashcard[];
  currentCard: number;
  cycled: boolean;
  settings: DeckSettings;

  constructor(settings: DeckSettings) {
    this.cards = [];
    this.currentCard = 0;
    this.cycled = false;
    this.settings = settings;
  }

  createDeck(): void {
    let card: Flashcard;

    let list = {};
    if (this.settings.useHiragana) {
      list = KANA_CHARACTERS.hiragana;
    } else if (this.settings.useKatakana) {
      list = KANA_CHARACTERS.katakana;
    } else if (KANA_CHARACTERS.useKanjiNumbers) {
      list = KANA_CHARACTERS.kanji_numbers;
    }

    for (const [key, value] of Object.entries(list)) {
      card = new Flashcard(value as string, key);
      this.cards.push(card);
      if (this.settings.showDakuten) {
        this.cards.push(card.dakutenCard);
      }
      if (this.settings.showHandakuten) {
        this.cards.push(card.handakutenCard);
      }
    }
  }

  nextCard() {
    if (this.currentCard < this.cards.length - 1) {
      this.currentCard++;
    } else if (this.currentCard === this.cards.length - 1) {
      this.cycled = true;
    }
  }

  lastCard() {
    if (this.currentCard > 0) {
      this.currentCard--;
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      this.swapCards(i, j);
    }
  }

  swapCards(index1: number, index2: number): void {
    let a = this.cards;
    [a[index1], a[index2]] = [a[index2], a[index1]];
    this.cards = a;
  }

  toString(): string {
    let list = '';
    this.cards.forEach((e) => {
      list += e.toString();
    });
    return list;
  }

  get top(): Flashcard {
    return this.cards[this.cards.length - 1];
  }

  get length(): number {
    return this.cards.length;
  }
}

export type DeckSettings = {
  useHiragana: boolean;
  useKatakana: boolean;
  useKanjiNumbers: boolean;
  showDakuten: boolean;
  showHandakuten: boolean;
};
