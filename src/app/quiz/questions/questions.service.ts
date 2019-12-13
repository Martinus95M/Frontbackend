export class QuestionsService { 
    getQuestionsOne(){
        return[
            {
                question: "Hvor meget CO2 udledning står flytrafik for?"
            }
        ]
    }
    getQuestionsTwo(){
        return[
            {
                question: "Hvordan kan du selv hjælpe miljøet?"
            }
        ]
    }
    getQuestionsThree(){
        return[
            {
                question: "Hvilke af disse dyr er beskyttede dyr?"
            }
        ]
    }
    getQuestionsFour(){
        return[
            {
                question: "Hvor meget is smelter på nordpolen om dagen?"
            }
        ]
    }
    getQuestionsFive(){
        return[
            {
                question: "Hvordan kan du hjælpe til et bedre miljø?"
            }
        ]
    }


    getAnswersOne() {
        return[
            {
                answerFirst: "20% af al CO2 udledning",
                return: false
            },
            {
                answerSecond: "40% af al CO2 udledning",
                return: false
            },
            {
                answerThree: "60% af al CO2 udledning",
                return: false
            },
            {
                answerFour: "80% af al CO2 udledning",
                return: true
            },
        ]
    }
    getAnswersTwo() {
        return[
            {
                answerFirst: "Ved at grave dit affald ned",
                return: false
            },
            {
                answerSecond: "Ved at sortere dit affald eller undgå at smide mad ud",
                return: true
            },
            {
                answerThree: "Ved at vaske hænder efter toiletbesøg",
                return: false
            },
            {
                answerFour: "Ved at samle faldne blade i naturen",
                return: false
            },
        ]
    }
    getAnswersThree() {
        return[
            {
                answerFirst: "Vidste du at det er ulovligt at handle med beskyttede dyrearter, som tigere og pandabjørne",
                return: true
            },
            {
                answerSecond: "Vidste du at det er ulovligt at handle med beskyttede dyrearter, som høner og grise",
                return: false
            },
            {
                answerThree: "Vidste du at det er ulovligt at handle med beskyttede dyrearter, som hunde og katte",
                return: false
            },
            {
                answerFour: "Vidste du at det er ulovligt at handle med beskyttede dyrearter, som pappegøjer og strusse",
                return: false
            },
        ]
    }
    getAnswersFour() {
        return[
            {
                answerFirst: "Vidste du at ca. 50 liter is smelter om dagen på Nordpolen",
                return: false
            },
            {
                answerSecond: "Vidste du at ca. 250 liter is smelter om dagen på Nordpolen",
                return: false
            },
            {
                answerThree: "Vidste du at ca. 500 liter is smelter om dagen på Nordpolen",
                return: false
            },
            {
                answerFour: "Vidste du at ca. 1000 liter is smelter om dagen på Nordpolen",
                return: true
            },
        ]
    }
    getAnswersFive() {
        return[
            {
                answerFirst: "Hvis du spiser mere rugbrød hjælper du til et bedre miljø",
                return: false
            },
            {
                answerSecond: "Hvis du bruger mere solcreme hjælper du til et bedre miljø",
                return: false
            },
            {
                answerThree: "Hvis du panter dine plastic flasker hjælper du til et bedre miljø",
                return: true
            },
            {
                answerFour: "Hvis du lader lyset brænde om natten hjælper du til et bedre miljø",
                return: false
            },
        ]
    }
}