"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const linkedStack_1 = require("./stack/linkedStack");
const p1 = new persona_1.Persona("sergio", "antozzi");
const pila1 = new linkedStack_1.LinkedStack();
pila1.push(1);
pila1.push(2);
pila1.push(3);
try {
    console.log(`
        pop: ${pila1.pop()}
        top: ${pila1.top()}
        size: ${pila1.size()}`);
}
catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    }
}
console.log(p1.nombre);
console.log(p1.apellido);
//# sourceMappingURL=index.Repaso.js.map