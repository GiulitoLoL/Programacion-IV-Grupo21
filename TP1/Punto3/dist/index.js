"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empleadoMedioTiempo_1 = require("./empleadoMedioTiempo");
const empleadoTiempoCompleto_1 = require("./empleadoTiempoCompleto");
const empleados = [
    new empleadoMedioTiempo_1.EmpleadoMedioTiempo('Ramiro'),
    new empleadoTiempoCompleto_1.EmpleadoTiempoCompleto('Jeremias'),
    new empleadoMedioTiempo_1.EmpleadoMedioTiempo('Giuliano'),
    new empleadoTiempoCompleto_1.EmpleadoTiempoCompleto('Chon')
];
for (const empleado of empleados) {
    console.log(`Empleado: ${empleado.nombre} - Salario: ${empleado.calcularSalario()}`);
}
//# sourceMappingURL=index.js.map