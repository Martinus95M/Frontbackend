import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { config } from 'rxjs';

import { ScoresComponent } from './scoreboard.component';
import { routing } from './app.routing';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
