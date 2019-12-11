export class CardsService {
    getCards(){
        return[
            {
                imageUrl: "../../assets/img/beach.svg",
                cardName: "Beach",
            },
            {
                imageUrl:"../../assets/img/iceberg.svg",
                cardName:"Iceberg",
            },
            {
                imageUrl:"../../assets/img/mountains.svg",
                cardName:"Mountains",
            },
            {
                imageUrl:"../../assets/img/waterfall.svg",
                cardName:"waterfall",
            },
            {
                imageUrl:"../../assets/img/windmills.svg",
                cardName:"Windmills",
            },
            {
                imageUrl:"../../assets/img/desert.svg",
                cardName:"Dessert",
            },
        ];
    }
    getCardback(){
        return [
            {
                imageUrl:"../../assets/img/seven.svg",
                cardName:"Seven",
            },
        ];
    }
}