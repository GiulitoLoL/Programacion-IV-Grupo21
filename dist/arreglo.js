"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./figures/circle");
const triangulo_1 = require("./figures/triangulo");
const rectangle_1 = require("./figures/rectangle");
const circle = new circle_1.Circle(5, 5);
const triangulo = new triangulo_1.Triangulo(5, 5);
const rectangle = new rectangle_1.Rectangle(5, 5);
const figuras = [circle, triangulo, rectangle];
figuras[0].dibujar();
figuras[1].dibujar();
figuras[2].dibujar();
figuras[0].calcularArea();
figuras[1].calcularArea();
figuras[2].calcularArea();
//# sourceMappingURL=arreglo.js.map