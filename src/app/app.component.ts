import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './quiz-play/app.component.html',
  styleUrls: ['./quiz-play/app.component.scss']
})




export class AppComponent {
  title = 'Hvor meget CO2 udledning står flytrafik for?';

  dropField = [
  ];

  dragField = [
    {
      answer: '20% af al CO2 udledning',
      return: false
    },
    {
      answer: '40% af al CO2 udledning',
      return: false
    },
    {
      answer: '60% af al CO2 udledning',
      return: false
    },
    {
      answer: '80% af al CO2 udledning',
      return: true
    }
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
