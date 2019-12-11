import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from "./cards/card.component";
import { CardsComponent } from "./cards/cards.component";

import { CardsService } from "./cards/cards.service";


@NgModule({
  declarations: [
    AppComponent, CardComponent, CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
