import { Animal } from "./animal";
import { volador } from "./volador";
declare class Pajaro extends Animal implements volador {
    especie: string;
    constructor(nombre: string, especie: string);
    hacerSonido(): void;
    volar(): void;
}
export { Pajaro };
//# sourceMappingURL=pajaro.d.ts.map