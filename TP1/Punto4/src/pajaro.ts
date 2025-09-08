import { Animal } from "./animal";
import { volador } from "./volador";

class Pajaro extends Animal implements volador {
    especie: string;

    constructor(nombre: string, especie: string) {
        super(nombre);
        this.especie = especie;
    }

    hacerSonido(): void {
        console.log("Pipipipipi");
    }

    volar(): void {
        console.log(`${this.nombre} está volando.`);
    }
}

export { Pajaro };