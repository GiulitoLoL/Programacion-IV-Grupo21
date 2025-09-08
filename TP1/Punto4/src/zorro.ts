import { Animal } from "./animal";

class Zorro extends Animal {
    especie: string;
    constructor(nombre: string, especie: string = "Zorro") {
        super(nombre);
        this.especie = especie;
    }
    hacerSonido(): void {
        console.log("Gering-ding-ding-dingeringeding!");
    }
}

export { Zorro };