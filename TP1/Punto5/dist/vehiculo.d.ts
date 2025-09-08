declare abstract class Vehiculo {
    marca: string;
    modelo: string;
    encendido: boolean;
    constructor(marca: string, modelo: string);
    encender(): void;
    apagar(): void;
    abstract recargarVehiculo(): void;
}
export { Vehiculo };
//# sourceMappingURL=vehiculo.d.ts.map