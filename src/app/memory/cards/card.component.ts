import { Component, Input } from "@angular/core";
// import { $ } from 'protractor';
// import { build$$ } from 'protractor/built/element';

@Component({
    selector: 'card',
    styleUrls: ['./card.component.scss'],
    template: ` <div class="sc-card" (click)="onClick($event)">
                    <img id="cardfront" src="{{data.imageUrl}}" alt="billede af {{data.cardName}}">
                    <img class="cardback" src="../../assets/img/seven.svg" alt="Background of card">   
                </div> 
                `
})



export class CardComponent {
    @Input() data;

    // const cards = document.querySelectorAll('.sc-card');

    // cards.forEach(card => card.addEventListener('click', flipCard));

    // function flipCard() {
    //     console.log ('I was clicked')
    //     console.log (this)
    // };

    onClick($event){
        console.log("I was clicked",$event);
        console.log(this);

        

        // $event.addClass('no-show');
        // $('.cardback').toggleClass('no-show')
        $($event.currentTarget).toggleClass('flip');
    }


    // log(){
    //     console.log("nice?")
    // }
    // document.getElementByID('carder').addEventListener('click', function ('click') {
    //     console.log ('NICE')
    //     // document.getElementById("cardback").classList.remove('noshow');
    //     // document.getElementById("cardfront").classList.add('show')
    // })
}