import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScoresComponent } from './scoreboard/scoreboard.component';


const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'scoreboard', component: ScoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
