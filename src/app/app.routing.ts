import { RouterModule } from '@angular/router';
import { ScoresComponent } from './scoreboard.component';

export const routing = RouterModule.forRoot([{
    path: '', component: ScoresComponent
}]);
