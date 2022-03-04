import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardDeckComponent } from './flashcard-deck.component';

describe('FlashcardDeckComponent', () => {
  let component: FlashcardDeckComponent;
  let fixture: ComponentFixture<FlashcardDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
