"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
const figure_1 = require("./figure");
class Triangulo extends figure_1.Figure {
    dibujar() {
        console.log("Dibujar Triangulo");
    }
    borrar() {
        console.log("Borrar Triangulo");
    }
    mover() {
        console.log("Mover Triangulo");
    }
    eliminar() {
        console.log("Eliminar Triangulo");
    }
    calcularArea() {
        let area = 0;
        if (this.x == 0 || this.y == 0) {
            area = 0;
        }
        else {
            area = Math.abs(this.x * this.y);
        }
        console.log(`El area es ${area / 2}`);
    }
}
exports.Triangulo = Triangulo;
//# sourceMappingURL=triangulo.js.map