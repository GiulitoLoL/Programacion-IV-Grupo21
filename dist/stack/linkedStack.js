"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedStack = void 0;
const node_1 = require("./node");
class LinkedStack {
    constructor() {
        this.tam = 0;
        this.head = null;
    }
    push(value) {
        if (this.tam == 0) {
            const nuevoNodo = new node_1.Node(null, value);
            this.head = nuevoNodo;
        }
        else {
            const nuevoNodo2 = new node_1.Node(this.head, value);
            this.head = nuevoNodo2;
        }
        this.tam++;
    }
    top() {
        if (this.head === null) {
            throw new Error("la pila esta vacia");
        }
        ;
        return this.head.elemento;
    }
    pop() {
        if (this.head === null) {
            throw new Error("la pila esta vacia");
        }
        ;
        const aRetornar = this.head;
        this.head = this.head.siguiente;
        aRetornar.siguiente = null;
        this.tam--;
        return aRetornar.elemento;
    }
    size() {
        return this.tam;
    }
    isEmpty() {
        return this.tam == 0;
    }
}
exports.LinkedStack = LinkedStack;
//# sourceMappingURL=linkedStack.js.map