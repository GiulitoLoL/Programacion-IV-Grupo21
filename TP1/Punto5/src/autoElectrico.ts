import { Electrico } from "./electrico";
import { Vehiculo } from "./vehiculo";

class AutoElectrico extends Vehiculo implements Electrico {
    nivelDeCarga: number;

    constructor(marca: string, modelo: string, nivelDeCarga: number) {
        super(marca, modelo);
        this.nivelDeCarga = nivelDeCarga;
    }

    mostrarNivelDeCarga(): void {
        console.log(`Nivel de carga de ${this.marca} ${this.modelo}: ${this.nivelDeCarga}%`);
    }

    recargarVehiculo(): void {
        this.nivelDeCarga = 100;
        console.log(`${this.marca} ${this.modelo} recargado al 100%.`);
    }

    enchufar(): void {
        console.log(`${this.marca} ${this.modelo} está enchufado. Cargando...`);
        this.recargarVehiculo();
    }
}

export { AutoElectrico };