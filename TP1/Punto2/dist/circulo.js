"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
const figuraGeometrica_1 = require("./figuraGeometrica");
class Circulo extends figuraGeometrica_1.FiguraGeometrica {
    radio;
    constructor(radio) {
        super('Círculo');
        this.radio = radio;
    }
    calcularArea() {
        return 3.14 * this.radio * this.radio;
    }
}
exports.Circulo = Circulo;
//# sourceMappingURL=circulo.js.map