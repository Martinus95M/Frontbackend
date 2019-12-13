import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { config, from } from 'rxjs';

import { HomeComponent } from './home/home.component';
import { QuizUserComponent } from './quiz-user/quiz-user.component';

import { PlayComponent } from './quiz/play.component';
import { QuestionsService } from './quiz/questions/questions.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




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
    QuizUserComponent,
    HomeComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
