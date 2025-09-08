"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoElectrico = void 0;
const vehiculo_1 = require("./vehiculo");
class AutoElectrico extends vehiculo_1.Vehiculo {
    nivelDeCarga;
    constructor(marca, modelo, nivelDeCarga) {
        super(marca, modelo);
        this.nivelDeCarga = nivelDeCarga;
    }
    mostrarNivelDeCarga() {
        console.log(`Nivel de carga de ${this.marca} ${this.modelo}: ${this.nivelDeCarga}%`);
    }
    recargarVehiculo() {
        this.nivelDeCarga = 100;
        console.log(`${this.marca} ${this.modelo} recargado al 100%.`);
    }
    enchufar() {
        console.log(`${this.marca} ${this.modelo} está enchufado. Cargando...`);
        this.recargarVehiculo();
    }
}
exports.AutoElectrico = AutoElectrico;
//# sourceMappingURL=autoElectrico.js.map