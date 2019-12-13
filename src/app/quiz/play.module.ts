import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PlayComponent} from './play.component';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    PlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [PlayComponent]
})
export class PlayModule {
}