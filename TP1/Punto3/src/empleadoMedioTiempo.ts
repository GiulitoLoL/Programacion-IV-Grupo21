import { Empleado } from "./empleado";

class EmpleadoMedioTiempo extends Empleado {
    calcularSalario(): number {
        return this.salarioBase / 2;
    }
}

export { EmpleadoMedioTiempo };