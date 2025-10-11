export class Pizza{
    protected sabor:string;
    protected tamaño:string;

    constructor(
        sabor:string,
        tamaño:string
    ){
        this.sabor = sabor;
        this.tamaño = tamaño;
    }
}