"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangulo_1 = require("./triangulo");
const circulo_1 = require("./circulo");
const cuadrado_1 = require("./cuadrado");
function mostrarArea(nombre, calcularArea) {
    console.log(`El área del ${nombre} es: ${calcularArea()}`);
}
const triangulo = new triangulo_1.Triangulo(3, 4);
const circulo = new circulo_1.Circulo(5);
const cuadrado = new cuadrado_1.Cuadrado(6);
mostrarArea(triangulo.getNombre(), () => triangulo.calcularArea());
mostrarArea(circulo.getNombre(), () => circulo.calcularArea());
mostrarArea(cuadrado.getNombre(), () => cuadrado.calcularArea());
//# sourceMappingURL=index.js.map