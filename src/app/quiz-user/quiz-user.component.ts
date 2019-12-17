import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CrudService } from 'src/app/users/crud.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services


@Component({
  selector: 'app-quiz-user',
  templateUrl: './quiz-user.component.html',
  styleUrls: ['./quiz-user.component.scss']
})
export class QuizUserComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder       // Form Builder service for Reactive forms
  ) { }

  ngOnInit() {

    this.crudApi.GetUserList(); // call GetUserList before main form is being called
    this.usersForm(); // Call user form when component is ready
    

    $("#game").click(function() {
      $(".warning").addClass("hide")
      $(".user").addClass("show")
    });
  }

   // Reactive user form
   usersForm() {
    this.userForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(3)]]
    })
  }
  
  // Accessing form control using getters
  get userName() {
    return this.userForm.get('userName');
  }

   // Reset student form's values
  ResetForm() {
    this.userForm.reset();
  } 

  submitUserData() {
    this.crudApi.AddUser(this.userForm.value); // Submit student data using CRUD API
    this.ResetForm();  // Reset form when clicked on reset button
  }

}
