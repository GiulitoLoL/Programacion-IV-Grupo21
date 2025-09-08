"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoGasolero = void 0;
const vehiculo_1 = require("./vehiculo");
class AutoGasolero extends vehiculo_1.Vehiculo {
    combustibleEnTanque;
    constructor(marca, modelo, combustibleEnTanque) {
        super(marca, modelo);
        this.combustibleEnTanque = combustibleEnTanque;
    }
    cargarCombustible() {
        console.log(`Cargando combustible en ${this.marca} ${this.modelo}...`);
        this.recargarVehiculo();
    }
    recargarVehiculo() {
        this.combustibleEnTanque = 55;
        console.log(`${this.marca} ${this.modelo} tiene el tanque lleno.`);
    }
}
exports.AutoGasolero = AutoGasolero;
//# sourceMappingURL=autoGasolero.js.map