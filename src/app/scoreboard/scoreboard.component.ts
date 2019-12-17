import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Router } from '@angular/router';

interface Score {
    name: string;
    points: number;
}
@Component ({
    // tslint:disable-next-line: component-selector
    selector: 'scores',
    templateUrl: './scoreboard.component.html'
})
export class ScoresComponent {

    scoresCol: AngularFirestoreCollection<Score>;
    scores: any;

    constructor(private afs: AngularFirestore, private _router: Router) {
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
        this.scoresCol = this.afs.collection('Scoreboard', ref => ref.orderBy('points', 'desc').limit(10));
        // this.scoresCol.orderBy('points > 100').limit(10);
        this.scores = this.scoresCol.valueChanges();
    }

    add() {
        this._router.navigate(['add']);
    }
}
