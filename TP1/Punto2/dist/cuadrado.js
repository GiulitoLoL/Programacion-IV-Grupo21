"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuadrado = void 0;
const figuraGeometrica_1 = require("./figuraGeometrica");
class Cuadrado extends figuraGeometrica_1.FiguraGeometrica {
    lado;
    constructor(lado) {
        super('Cuadrado');
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
exports.Cuadrado = Cuadrado;
//# sourceMappingURL=cuadrado.js.map