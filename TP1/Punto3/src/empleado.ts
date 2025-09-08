abstract class Empleado {
    nombre: string;
    salarioBase: number;

    constructor(nombre: string, salarioBase: number = 200000) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }
    abstract calcularSalario(): number;
}

export { Empleado };