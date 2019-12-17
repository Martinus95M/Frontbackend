import { Component, } from "@angular/core";
import { CardsService } from "./cards.service";

@Component({
    selector: 'cards',
    styleUrls: ['./cards.component.scss'],
    template: `
    <div class="container">
        <div class="gridcontainer">
            <div class="griditem" *ngFor="let card of cards">
                <card [data]="card"></card>
            </div>
        </div>
    </div>
`,
})


export class CardsComponent {
    cards;
    
    constructor (cardsService: CardsService){
        this.cards = cardsService.getCards();
    }
}
