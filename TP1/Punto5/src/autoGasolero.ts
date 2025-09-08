import { Vehiculo } from "./vehiculo";

class AutoGasolero extends Vehiculo {
    combustibleEnTanque: number;

    constructor(marca: string, modelo: string, combustibleEnTanque: number) {
        super(marca, modelo);
        this.combustibleEnTanque = combustibleEnTanque;
    }

    cargarCombustible(): void {
        console.log(`Cargando combustible en ${this.marca} ${this.modelo}...`);
        this.recargarVehiculo();
        
    }

    recargarVehiculo(): void {
        this.combustibleEnTanque = 55;
        console.log(`${this.marca} ${this.modelo} tiene el tanque lleno.`);
    }
}

export { AutoGasolero };