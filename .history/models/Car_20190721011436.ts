class Car{
    public tyres: number;
    public carName: string;

    constructor(tyres:number, carName:string){
        this.carName = carName ;
        this.tyres = tyres;
    }
}
module.exports = Car;  