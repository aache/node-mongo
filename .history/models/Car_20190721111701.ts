class Car{
    public tyres: string;
    public carName: string;

    constructor(tyres:string, carName:string){
        this.carName = carName ;
        this.tyres = tyres;
    }
}
module.exports = Car;  