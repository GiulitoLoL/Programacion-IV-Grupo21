"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
const figuraGeometrica_1 = require("./figuraGeometrica");
class Triangulo extends figuraGeometrica_1.FiguraGeometrica {
    base;
    altura;
    constructor(base, altura) {
        super('Triángulo');
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
exports.Triangulo = Triangulo;
//# sourceMappingURL=triangulo.js.map