import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PlayComponent} from './play.component';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { QuestionComponent } from "./questions/question.component";
import { QuestionsComponent } from "./questions/questions.component";

import { QuestionsService } from "./questions/questions.service";

@NgModule({
  declarations: [
    PlayComponent, QuestionComponent, QuestionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [QuestionsService],
  bootstrap: [PlayComponent]
})
export class PlayModule {
}