"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const figure_1 = require("./figure");
class Rectangle extends figure_1.Figure {
    dibujar() {
        console.log("Dibujar Rectangle");
    }
    borrar() {
        console.log("Borrar Rectangle");
    }
    mover() {
        console.log("Mover Rectangle");
    }
    eliminar() {
        console.log("Eliminar Rectangle");
    }
    calcularArea() {
        let area = 0;
        if (this.x == 0 || this.y == 0) {
            area = 0;
        }
        else {
            area = Math.abs(this.x * this.y);
        }
        console.log(`El area es ${area}`);
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map