export class Pokemon {
    name: string;
    id: number;
    imgUrl: string;
    types: { name: string, color: string}[];
    height: number;
    weight: number;


    constructor(
            name: string, 
            id:number, 
            imgUrl: string,
            types: { name: string, color: string}[],
            height: number,
            weight: number
             ) {
        this.name = name;
        this.id = id;
        this.imgUrl = imgUrl;
        this.types = types;
        this.height = height;
        this.weight = weight;

    }
}