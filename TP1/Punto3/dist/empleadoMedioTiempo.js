"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoMedioTiempo = void 0;
const empleado_1 = require("./empleado");
class EmpleadoMedioTiempo extends empleado_1.Empleado {
    calcularSalario() {
        return this.salarioBase / 2;
    }
}
exports.EmpleadoMedioTiempo = EmpleadoMedioTiempo;
//# sourceMappingURL=empleadoMedioTiempo.js.map