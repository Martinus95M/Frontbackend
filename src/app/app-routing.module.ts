import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScoresComponent } from './scoreboard/scoreboard.component';
import { QuizUserComponent } from './quiz-user/quiz-user.component';
import { MemoryComponent } from './memory/memory.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'quiz-user', component: QuizUserComponent },
  { path: 'memory', component: MemoryComponent},
  { path: 'scoreboard', component: ScoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
