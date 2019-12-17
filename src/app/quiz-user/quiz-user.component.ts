import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-quiz-user',
  templateUrl: './quiz-user.component.html',
  styleUrls: ['./quiz-user.component.scss']
})
export class QuizUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#game").click(function() {
      $(".warning").addClass("hide")
      $(".user").addClass("show")
    });
    
  }

}
