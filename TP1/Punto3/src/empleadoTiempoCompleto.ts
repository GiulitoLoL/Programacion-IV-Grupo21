import { Empleado } from "./empleado";

class EmpleadoTiempoCompleto extends Empleado {
    calcularSalario(): number {
        return this.salarioBase + 20000;
    }
}

export { EmpleadoTiempoCompleto };