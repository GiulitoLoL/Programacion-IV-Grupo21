import { Order } from "./../orden";

export interface OrdersInterface{
    size(): number;
    getOrder(id:number):Order | null;
    addOrder(order:Order):void;
    deleteOrder(id:number):void;
    modifyOrder(id:number, estado:string):void;
}