import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Router } from '@angular/router';

interface Score {
    name: string;
    points: number;
}
@Component ({
    selector: 'scores',
    templateUrl: './scoreboard.component.html'
})
export class ScoresComponent {

    scoresCol: AngularFirestoreCollection<Score>;
    scores: any;

    constructor(private afs: AngularFirestore, private _router: Router) {
    }

    ngOnInit(){
        this.scoresCol = this.afs.collection('Scoreboard', ref => ref.orderBy('points', 'desc').limit(10));
        // this.scoresCol.orderBy('points > 100').limit(10);
        this.scores = this.scoresCol.valueChanges();
    }

    add(){
        this._router.navigate(['add']);
    }
}
