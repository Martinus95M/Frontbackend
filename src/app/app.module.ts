import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { config, from } from 'rxjs';

import { HomeComponent } from './home/home.component';
import { QuizUserComponent } from './quiz-user/quiz-user.component';
import { QuizPlayComponent } from './quiz-play/quiz-play.component';

import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

//Memory Game
import { MemoryComponent } from "./memory/memory.component";
import { CardComponent } from "./memory/cards/card.component";
import { CardsComponent } from "./memory/cards/cards.component";
import { CardsService } from "./memory/cards/cards.service";

import { ScoresComponent } from './scoreboard/scoreboard.component';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDe79_yh2eLtpVh21RNThvn_jFpaQLHUJ4",
  authDomain: "frontbackend-db.firebaseapp.com",
  databaseURL: "https://frontbackend-db.firebaseio.com",
  projectId: "frontbackend-db",
  storageBucket: "frontbackend-db.appspot.com",
  messagingSenderId: "719115336887",
  appId: "1:719115336887:web:c3110398222e324a182132"
};


@NgModule({
  declarations: [
    AppComponent,
    ScoresComponent,
    QuizUserComponent,
    HomeComponent,
    CardsComponent,
    CardComponent,
    MemoryComponent,
    QuizPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
