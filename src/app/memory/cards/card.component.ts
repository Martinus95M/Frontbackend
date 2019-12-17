import { Component, Input } from "@angular/core";
// import { $ } from 'protractor';
// import { build$$ } from 'protractor/built/element';

let hasFlippedCard = false;
let firstCard, secondCard;

var score = 0;

@Component({
    selector: 'card',
    styleUrls: ['./card.component.scss'],
    template: ` <div class="sc-card" (click)="onClick($event)" [attr.data-name]="data.cardName">
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
        // console.log("I was clicked",$event);
        // console.log(this);

        // let hasFlippedCard = false;
        // let firstCard, secondCard;

        // $event.addClass('no-show');
        // $('.cardback').toggleClass('no-show')
        
        $($event.currentTarget).addClass(function mynamedfunc(){
            var classFlip = 'flip';

            if (!hasFlippedCard) {
                hasFlippedCard = true;
                firstCard = this;

                // console.log(hasFlippedCard, firstCard);
                
                return classFlip;
            } else {
                hasFlippedCard = false;
                secondCard = this

                //do they match
                
                console.log(firstCard.dataset.name);
                console.log(secondCard.dataset.name);

                if (firstCard.dataset.name === secondCard.dataset.name) {

                    score+1;

                    // firstCard.removeclass('flip');
                    // secondCard.removeclass('flip');

                    console.log('match');

                    return classFlip;
                } 
                // return classFlip;
            } 
        });

       

        // if (!hasFlippedCard){
        //     //first click
        //     hasFlippedCard = true;
        //     firstCard = this;

        //     console.log({hasFlippedCard, firstCard});
        // } else {
        //     //second click
        //     hasFlippedCard = false;
        //     secondCard = this;

        //     console.log({firstCard, secondCard});
        // }
        
        // $($event.currentTarget).addClass(function(){
            
        //     if (!hasFlippedCard){
        //         //first click
        //         hasFlippedCard = true;
        //         firstCard = this;
    
        //         console.log({hasFlippedCard, firstCard});

        //         return 'flip';
        //     } else {
        //         //second click
        //         hasFlippedCard = false;
        //         secondCard = this;
    
        //         console.log({firstCard, secondCard});
        //         return 'flip';
        //     }
        // });

        
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