import { Component, Input } from "@angular/core";

@Component({
    selector: 'card',
    styleUrls: ['./card.component.scss'],
    template: ` <div class="sc-card">
                    <img (click)="onClick($event)" class="cardback" src="../../assets/img/seven.svg" alt="Background of card">
                    <img id="cardfront" src="{{data.imageUrl}}" alt="billede af {{data.cardName}}">
                </div> 
                `

})


export class CardComponent {
    @Input() data;


    onClick($event){
        console.log("clicked",$event);

        $('img').addClass('no-show');

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