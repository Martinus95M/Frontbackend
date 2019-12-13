import {Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  
  ngOnInit() {}
  
  title = 'Frontbackend';

  control = [
    {
      
    }
  ];

    questions = [
      {
        name: '20% af al CO2 udledning',
        category: 'wrong'
      },
      {
        name: '40% af al CO2 udledning',
        category: 'wrong'
      },
      {
        name: '60% af al CO2 udledning',
        category: 'wrong'
      },
      {
        name: '80% af al CO2 udledning',
        category: 'correct'
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