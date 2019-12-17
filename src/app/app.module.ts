import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { config, from } from 'rxjs';

import { HomeComponent } from './home/home.component';
import { QuizUserComponent } from './quiz-user/quiz-user.component';



@NgModule({
  declarations: [
    AppComponent,
    QuizUserComponent,
    HomeComponent,
    ReactiveFormsModule // Reactive forms module
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Main Angular fire module 
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
