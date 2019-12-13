import { Component, Input } from "@angular/core";

@Component({
    selector: 'question',
    template: ` <div class="answersOne">
                    <p class="answerOne" src="{{data.answersFirst}}">
                    <p class="answerOne" src="{{data.answersSecond}}">
                    <p class="answerOne" src="{{data.answersThird}}">
                    <p class="answerOne" src="{{data.answersFourth}}">
                </div>
                `

})


export class QuestionComponent {
    @Input() data;
}