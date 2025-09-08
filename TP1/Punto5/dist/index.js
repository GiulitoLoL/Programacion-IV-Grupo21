"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autoElectrico_1 = require("./autoElectrico");
const autoGasolero_1 = require("./autoGasolero");
const ModelS = new autoElectrico_1.AutoElectrico("Tesla", "Model S", 80);
const Corolla = new autoGasolero_1.AutoGasolero("Toyota", "Corolla", 20);
ModelS.mostrarNivelDeCarga();
ModelS.enchufar();
Corolla.cargarCombustible();
//# sourceMappingURL=index.js.map