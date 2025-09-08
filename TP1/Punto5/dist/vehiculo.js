"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    marca;
    modelo;
    encendido;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log(`${this.marca} ${this.modelo} está encendido.`);
    }
    apagar() {
        this.encendido = false;
        console.log(`${this.marca} ${this.modelo} está apagado.`);
    }
}
exports.Vehiculo = Vehiculo;
//# sourceMappingURL=vehiculo.js.map