abstract class FiguraGeometrica {
    protected nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    getNombre(): string {
        return this.nombre;
    }
    abstract calcularArea(): number;
}

export { FiguraGeometrica };