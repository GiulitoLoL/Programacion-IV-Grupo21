# Programación-IV-Grupo21

**Integrantes**: Atala Jeremias, Natalini Juan Blas, Pizzico Ramiro y Tedechi Gómez Giuliano

## TP1

*Carpetas*
TP1:<br>
├Punto1<br>
├Punto2<br>
├Punto3<br>
├Punto4<br>
└Punto5

En cada carpeta estan los separados como proyectos diferentes, cada una con su package.json, tsconfig, /dist, /src y /node_modules.

comandos para correr los programas:

``` 
cd TP1
cd PuntoX
npm run build
npm run start 
```

Diagramas UML requeridos:

Ejercicio 3:

![UMLEjercico3](./TP1/Punto3/DiagramaUMLEmpleados.png)

Ejercicio 5:

![UMLEjercico5](./TP1/Punto5/DiagramaUMLVehiculos.png)

## TP2
Este proyecto implementa las reglas de negocio y el contrato HTTP para una API de gestión de pedidos de pizzería. Utilizamos **TypeScript** y aplicamos la metodología **Desarrollo Guiado por Pruebas (TDD)** para garantizar un código testeable, seguro y robusto. La lógica está completamente aislada del cliente HTTP para facilitar el testing.

---

### Requisitos e Instalación

#### Requisitos

* **Node.js:** Versión 18 o superior.
* **npm:** Última versión.

#### Instalación de Dependencias

Ejecuta este comando en la raíz del proyecto:

```bash
npm install
```

### Guía de Ejecución y Scripts

| Script | Comando | Descripción |
| ------ | ------- | ----------- |
| Tests | `npm test` | Ejecuta todos los tests |
| Tests con Watch | `npm test -- --watch` | Ejecuta tests en modo vigilancia, ideal para el desarrollo. |
| Covertura | `npm run coverage` | Ejecuta tests y genera el reporte de cobertura de código. |
| Inicio Dev | `npm run dev` | Inicia la aplicación de desarrollo |

#### Covertura de código

Utilizamos Jest como framework de testing.

Para generar el informe de cobertura, ejecuta:

```bash
    npm run coverage
```

Objetivo de Cobertura Cumplido: La cobertura del proyecto es ≥80% en archivos modificados, verificando que todas las reglas de negocio y el manejo de errores HTTP están cubiertos.

El informe detallado se genera en la carpeta `coverage/lcov-report/index.html.`

### User Stories Abordadas

Las siguientes historias de usuario no son de commits hechos en el repositorio git, por olvidarnos que era necesario hacerlos, en cambio optamos por registrar los avances que tuvimos durante los distintos pasos en la "producción" del tp:

| Pasos | Ciclo TDD Aplicado | Resultado del Paso |
|-|-|-|
| 01 | Crear Orden: El usuario puede crear una orden con tamaño y toppings. | [x] Abordada |
| 02 | Cálculo de Precio: El sistema calcula el precio final | [x] Abordada |
| 03 | Cancelación: El usuario puede cancelar órdenes no entregadas. | [x] Abordada |
| 04 | Validación (Toppings): Máximo de 5 toppings por pizza | [x] Abordada |
| 05 | Validación (Dirección): La dirección de entrega debe tener ≥10 caracteres | [x] Abordada |
| 06 | Restricción (Cancelación): Impedir la cancelación de órdenes `delivered` | [x] Abordada |
| 07 | Validación (Items): La orden no debe tener items vacíos | [x] Abordada |

### Contrato API
Estos comandos ilustran el contrato HTTP de la API, verificado por los tests de integración (MSW).

1. POST /orders (Crear Orden)
```bash
# Éxito (Status 201):
curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{
  "items": [{ "size": "M", "toppings": ["jamon", "aceitunas"] }], 
  "address": "Calle Falsa 1234, CABA"
}'

# Fallo 422 (Dirección corta - Regla US-06):
curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{
  "items": [{ "size": "L", "toppings": ["a"] }], 
  "address": "corta"
}'
```

2. POST /orders/:id/cancel (Cancelar Orden)

```bash
# Éxito (Status 200 - Orden Pendiente):
curl -X POST http://localhost:3000/orders/ORD-PENDING-789/cancel

# Fallo 409 (Regla US-07 - Orden Entregada):
curl -X POST http://localhost:3000/orders/ORD-DELIVERED-007/cancel
```
### User Stories Abordadas
Las siguientes historias de usuario fueron implementadas y testeadas rigurosamente, guiadas por el ciclo TDD:

| ID | Descripción | Estado |
|-|-|-|
| US-01 | Crear Orden: El usuario puede crear una orden con tamaño y toppings. | [x] Abordada |
| US-02 | Cálculo de Precio: El sistema calcula el precio final (base + toppings). | [x] Abordada |
| US-03 | Cancelación: El usuario puede cancelar órdenes no entregadas. | [x] Abordada |
| US-05 | Validación (Toppings): Máximo de 5 toppings por pizza (Error 422). | [x] Abordada |
| US-06 | Validación (Dirección): La dirección de entrega debe tener ≥10 caracteres (Error 422). | [x] Abordada |
| US-07 | Restricción (Cancelación): Impedir la cancelación de órdenes `delivered` (Error 409). | [x] Abordada |
| US-08 | Validación (Items): La orden no debe tener items vacíos (Error 422). | [x] Abordada |

### Matriz de Casos de Prueba (CA ↔ Tests)

| ID | Casos/Descripción | Precondición | Input| Acción | Resultado esperado | Test |
|-|-|-|-|-|-|-|
| CA-001 | Cálculo de precio total (US-02) | Item válido. | `size: 'L', toppings: ['a', 'b', 'c']` | `calculatePrice(item)` | Retorna $16.00 (Base 10 + 3*2). | Unitario |
| CA-002 | Validación: Máximo 5 toppings (US-05) | Body de orden. | `items: [{toppings: 6}]` | `validateOrderBody()` | Lanza error "máximo de 5 toppings" (422). | Unitario |
| CA-003 | Contrato POST /orders (Éxito) | Servidor activo. | Orden válida. | Petición `POST /orders` | Retorna objeto `Order` con `status: 'pending'`. | Integración |
| CA-004 | Contrato POST /orders (Fallo 422) | Servidor activo. | `items: []`. | Petición `POST /orders` | Retorna error con '422'. | Integración |
| CA-005 | Contrato POST /cancel | Servidor activo | ID: 'delivered-order'. | Petición `POST /cancel` | Retorna error con '409' | Integración |
| CA-006 | Validación: Items no vacíos (US-08)| Body de orden. | `items: []` | `validateOrderBody()` | Lanza error "items vacíos" (422). | Unitario|
| CA-007 | Validación: Dirección mínima (US-06) | Body de orden. | `address: "corta"` | `validateOrderBody()` | Lanza error "al menos 10 caracteres" (422). | Unitario |

### Pasos del Ciclo TDD (Registro de Desarrollo)
El proyecto se desarrolló siguiendo rigurosamente el ciclo TDD (Red → Verde → Refactor) para toda la lógica implementada.

| US | Ciclo TDD Aplicado | Objetivo Alcanzado |
|-|-|-|
| US-01, 02 | RED: Creación de tests unitarios para calculatePrice.<br>GREEN: Implementación de calculatePrice y estructura inicial de Order. | Se verificó que el cálculo de precios era correcto.<br>El cálculo de precios es correcto. |
| US-05, 06, 08 | RED: Tests unitarios para las reglas de validación (toppings, dirección, items vacíos).<br>GREEN: Implementación de validateOrderBody para lanzar ValidationError (Status 422). | Se validó que la lógica no contenía restricciones iniciales.<br>La lógica de negocio lanza errores 422 cuando las reglas son violadas. |
| US-03, 07 | RED: Tests unitarios para isCancelable probando el estado delivered.<br>GREEN: Implementación de isCancelable para manejar la restricción (lanzando ConflictError 409). | Se aseguró que la cancelación fallara intencionalmente.<br>Se impide la cancelación de órdenes en estado delivered. |