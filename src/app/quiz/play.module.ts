import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgDragDropModule } from 'ng-drag-drop';
 
 
@NgModule({
  imports: [
      BrowserModule, 
      NgDragDropModule.forRoot()
  ],
  declarations: [],
  bootstrap: []
})
export class AppModule {}