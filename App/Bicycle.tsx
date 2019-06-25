interface IBicycle {
    name: string,
    type: string,
    year: Date,
    color: string,
    image: string
}

export class Bicycle implements IBicycle {

    constructor(public name: string, public type: string, public year: Date, public color: string, public image: string){

    }



}