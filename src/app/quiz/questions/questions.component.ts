import { Component, } from "@angular/core";
import { QuestionsService } from "./questions.service";

@Component({
    selector: 'questions',
    template: `
    <div class="container">
        <div class="gridcontainer">
            <div class="griditem" *ngFor="let question of questions">
                <question [data]="question"></question>
            </div>
        </div>
    </div>
`,
})


export class QuestionsComponent {
    questions;
    
    constructor (questionsService: QuestionsService){
        this.questions = questionsService.getQuestionsOne();
    }
}