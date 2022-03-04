import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { FlashcardDeckComponent } from './flashcard-deck/flashcard-deck.component';
import { ButtonPanelComponent } from './button-panel/button-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    FlashcardDeckComponent,
    ButtonPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
