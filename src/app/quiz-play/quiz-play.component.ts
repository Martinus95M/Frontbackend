import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quiz-play',
  templateUrl: './quiz-play.component.html',
  styleUrls: ['./quiz-play.component.scss']
})




export class QuizPlayComponent {
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