"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zorro = void 0;
const animal_1 = require("./animal");
class Zorro extends animal_1.Animal {
    especie;
    constructor(nombre, especie = "Zorro") {
        super(nombre);
        this.especie = especie;
    }
    hacerSonido() {
        console.log("Gering-ding-ding-dingeringeding!");
    }
}
exports.Zorro = Zorro;
//# sourceMappingURL=zorro.js.map