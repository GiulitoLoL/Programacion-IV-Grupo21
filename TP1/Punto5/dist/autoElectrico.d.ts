import { Electrico } from "./electrico";
import { Vehiculo } from "./vehiculo";
declare class AutoElectrico extends Vehiculo implements Electrico {
    nivelDeCarga: number;
    constructor(marca: string, modelo: string, nivelDeCarga: number);
    mostrarNivelDeCarga(): void;
    recargarVehiculo(): void;
    enchufar(): void;
}
export { AutoElectrico };
//# sourceMappingURL=autoElectrico.d.ts.map