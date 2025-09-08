abstract class Vehiculo {
    marca: string;
    modelo: string;
    encendido: boolean;
    
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }

    encender(): void {
        this.encendido = true;
        console.log(`${this.marca} ${this.modelo} está encendido.`);
    }
    apagar(): void {
        this.encendido = false;
        console.log(`${this.marca} ${this.modelo} está apagado.`);
    }
    abstract recargarVehiculo(): void;
}

export { Vehiculo };