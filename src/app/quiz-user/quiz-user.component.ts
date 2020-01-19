import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './user';

@Component({
  selector: 'app-quiz-user',
  templateUrl: './quiz-user.component.html',
  styleUrls: ['./quiz-user.component.scss']
})
export class QuizUserComponent implements OnInit {

  form : FormGroup;
  user = new User();

  constructor(fb : FormBuilder, private afs : AngularFirestore, private _router : Router) {
    
    this.form = fb.group({
      username : ['', Validators.required]
    })
      
    console.log(afs);
   }

  ngOnInit() {


    $("#game").click(function() {
      $(".warning").addClass("hide")
      $(".user").addClass("show")
    });
    
  }

  submit() {
      this.afs.collection('Scoreboard').add({
        name : this.user.name
      });
  }

}
