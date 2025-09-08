"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoTiempoCompleto = void 0;
const empleado_1 = require("./empleado");
class EmpleadoTiempoCompleto extends empleado_1.Empleado {
    calcularSalario() {
        return this.salarioBase + 20000;
    }
}
exports.EmpleadoTiempoCompleto = EmpleadoTiempoCompleto;
//# sourceMappingURL=empleadoTiempoCompleto.js.map