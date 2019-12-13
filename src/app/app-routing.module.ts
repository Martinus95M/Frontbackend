import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home/home.component';
//import { QuizUserComponent } from './quiz-user/quiz-user.component';
import { PlayComponent } from './quiz/play.component';

const routes: Routes = [
  //{ path: '', component : HomeComponent },
  //{ path: 'quiz-user', component: QuizUserComponent },
  { path: 'quiz', component: PlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }