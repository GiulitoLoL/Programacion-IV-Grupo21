import { Pizza } from "./pizza";

export class Order{
    protected id: number;
    protected estado: string;

    constructor(
        id:number,
        estado:string
    ){
        this.id = id;
        this.estado = estado;
    }

    getId(){
        return this.id;
    };

    setOrder(newId:number){
        this.id = newId;
    }
    
    getEstado(){
        return this.estado;
    }

    setEstado(newEstado:string){
        this.estado = newEstado;
    }
}