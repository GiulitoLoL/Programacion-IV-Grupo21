"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const figure_1 = require("./figure");
class Circle extends figure_1.Figure {
    dibujar() {
        console.log("Dibujar Circle");
    }
    borrar() {
        console.log("Borrar Circle");
    }
    mover() {
        console.log("Mover Circle");
    }
    eliminar() {
        console.log("Eliminar Circle");
    }
    calcularArea() {
        let radio = 0;
        const pi = 3.14;
        if (this.y == 0) {
            radio = 0;
        }
        else {
            radio = Math.abs(0 + this.y);
        }
        console.log(`El area es ${Math.round((radio * pi) * 100) / 100}`);
    }
}
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map