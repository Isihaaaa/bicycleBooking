interface IBicycle {
    name: string,
    type: string,
    year: string,
    color: string,
    image: string
}

export class Bicycle implements IBicycle {

    constructor(public name: string, public type: string, public year: string, public color: string, public image: string){

    }

}