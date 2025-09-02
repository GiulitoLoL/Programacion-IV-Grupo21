import { Stack } from "./stack.interface";
import {Node} from "./node";

export class LinkedStack implements Stack{
    public head:Node | null;
    public tam:number;
    
    constructor(){
        this.tam = 0;
        this.head = null;
    }

    push(value: number): void{
        if(this.tam == 0){
            const nuevoNodo = new Node(null, value)
            this.head = nuevoNodo;
        }
        else{
            const nuevoNodo2 = new Node(this.head,value);
            this.head=nuevoNodo2;
        }

        this.tam++;
    }

    top(): number {
        if(this.head === null){
            throw new Error("la pila esta vacia");
        };
        return this.head.elemento;
    }

    pop(): number {
        if(this.head === null){
            throw new Error("la pila esta vacia");
        };
        const aRetornar = this.head;
        this.head = this.head.siguiente;
        aRetornar.siguiente = null;
        this.tam--;
        return aRetornar.elemento;
    }

    size(): number {
        return this.tam;
    }
    isEmpty(): boolean {
        return this.tam == 0;
    }

}