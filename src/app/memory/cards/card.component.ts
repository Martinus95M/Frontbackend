import { Component, Input } from "@angular/core";

@Component({
    selector: 'card',
    template: ` <div class="card">
                    <img class="cardfront" src="{{data.imageUrl}}" alt="billede af {{data.cardName}}">
                    <img id="cardback" class="cardback" src="../../assets/img/seven.svg" alt="Background of card">
                </div> 
                `

})


export class CardComponent {
    @Input() data;

    // log(){
    //     console.log("nice?")
    // }
    // document.getElementByID('carder').addEventListener('click', function ('click') {
    //     console.log ('NICE')
    //     // document.getElementById("cardback").classList.remove('noshow');
    //     // document.getElementById("cardfront").classList.add('show')
    // })
}