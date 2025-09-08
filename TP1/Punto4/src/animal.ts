abstract class Animal {
    nombre: string

    constructor(nombre: string) {
        this.nombre = nombre;
    }
    abstract hacerSonido(): void;
}

export { Animal };