import { number } from "zod";
import { OrdersInterface } from "./interface/ordenes.interface";
import { Order } from "./orden";

export class MockOrdenes implements OrdersInterface{
    protected tam: number;
    protected conteiner: Array<Order>;

    constructor(){
        this.tam = 0;
        this.conteiner = new Array<Order>;
    }
    
    size():number{
        return this.conteiner.length
    }
    getOrder(id: number): Order | null {
        const resultado = this.conteiner.find(
            (order:Order) =>{
                return order.getId() === id;
            }
        );
        if(resultado === undefined){
            throw new Error ("No se encuentra esta orden");
        };
        return resultado;
    }
    addOrder(order:Order): void {
        this.conteiner.push(order);
        this.tam ++;
    };

    deleteOrder(id:number): void {
        this.conteiner = this.conteiner.filter((orden:Order) => orden.getId() !== id);
        this.tam = this.conteiner.length;
    };
    
    modifyOrder(id: number, estado:string): void {
        const resultado = this.conteiner.find(
            (order:Order)=>{
                return order.getId() === id;
            }
        );
        if(resultado === undefined){
            throw new Error("No se encuentra esta orden");
        };
        resultado.setEstado(estado);
    };    
}