"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pajaro = void 0;
const animal_1 = require("./animal");
class Pajaro extends animal_1.Animal {
    especie;
    constructor(nombre, especie) {
        super(nombre);
        this.especie = especie;
    }
    hacerSonido() {
        console.log("Pipipipipi");
    }
    volar() {
        console.log(`${this.nombre} está volando.`);
    }
}
exports.Pajaro = Pajaro;
//# sourceMappingURL=pajaro.js.map