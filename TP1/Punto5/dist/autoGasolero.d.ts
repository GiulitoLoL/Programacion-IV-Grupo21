import { Vehiculo } from "./vehiculo";
declare class AutoGasolero extends Vehiculo {
    combustibleEnTanque: number;
    constructor(marca: string, modelo: string, combustibleEnTanque: number);
    cargarCombustible(): void;
    recargarVehiculo(): void;
}
export { AutoGasolero };
//# sourceMappingURL=autoGasolero.d.ts.map