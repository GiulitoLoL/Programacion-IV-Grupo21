## TEORIA.md

### 1. Ciclo Rojo → Verde → Refactor
El ciclo “Rojo, Verde, Refactor” es la base del desarrollo guiado por pruebas (TDD). Primero se escribe un test que falla (rojo), después se hace el código mínimo necesario para que pase (verde) y por último se mejora el código sin romper los tests (refactor).  
La idea es avanzar en pasos chicos para detectar errores rápido y no complicar el código más de lo necesario.

---

### 2. Tipos de tests en APIs
Los **tests unitarios** prueban funciones o partes pequeñas del código por separado.  
Los **tests de integración** verifican que distintas partes del sistema trabajen bien juntas, por ejemplo una ruta de Express con la base de datos.  
Y los **E2E (end to end)** simulan el uso real de la app, desde que se hace la petición hasta que se obtiene la respuesta. Cuanto más completo el test, más tarda pero también da más seguridad.

---

### 3. Dobles de prueba: mock, stub y spy
Un doble de prueba es algo que reemplaza una parte real del sistema durante un test.  
Un **stub** devuelve valores fijos, sirve cuando sólo necesitamos una respuesta sin lógica.  
Un **mock** simula comportamiento y también permite revisar si se llamó como esperábamos.  
Un **spy** no reemplaza, solo espía y guarda información de las llamadas reales.  
Se elige según si queremos controlar el resultado o solo mirar cómo se comporta el código.

---

### 4. Separar app de server
Separar la app del servidor sirve para poder testear sin tener que levantar el puerto real.  
Por ejemplo:

```ts
// app.ts
import express from "express";
export function makeApp() {
  const app = express();
  app.get("/ping", (_, res) => res.json({ ok: true }));
  return app;
}

// server.ts
import { makeApp } from "./app";
makeApp().listen(3000, () => console.log("Servidor corriendo"));
```

Y el test con Supertest quedaría así:

```ts
import request from "supertest";
import { makeApp } from "../app";

test("GET /ping responde ok", async () => {
  const res = await request(makeApp()).get("/ping");
  expect(res.status).toBe(200);
  expect(res.body.ok).toBe(true);
});
```

---

### 5. Zod: parse vs safeParse
`parse()` valida los datos y lanza un error si algo falla.  
`safeParse()` hace lo mismo pero devuelve un objeto con `success` y `data` o `error`.  
En una ruta Express conviene usar `safeParse`, así se puede manejar el error y devolver un 400 sin que el servidor se caiga.

---

### 6. Reglas de dominio a probar
Las reglas de dominio son cosas propias del negocio, no solo validaciones básicas.  
Por ejemplo:  
1. No se puede crear una cuenta con saldo negativo.  
2. No se puede reservar un turno si ya hay otro en el mismo horario.  
Estas cosas deberían probarse con tests unitarios porque son parte de las reglas principales del sistema.

---

### 7. Malos olores en tests
Algunos problemas comunes son:  
- **Nombres poco claros**, como “test1” o “shouldWork”.  
- **Código repetido**, con los mismos datos de prueba copiados en varios tests.  
- **Asserts débiles**, que solo comprueban que algo existe pero no el valor correcto.  
También son malos los mocks que se rompen fácil cuando cambia el código real.

---

### 8. Criterios de aceptación y tests
Los criterios de aceptación sirven para saber qué tiene que cumplir el sistema y se pueden vincular con los tests.  
Por ejemplo:

| Criterio de aceptación                           | Test correspondiente                              |
|--------------------------------------------------|--------------------------------------------------|
| `/ping` debe devolver `{ ok: true }`             | Se hace un GET y se espera status 200 y `{ ok: true }` |
| No se puede crear un usuario con email inválido  | Validación con Zod rechaza email incorrecto      |

---

### 9. No buscar 100% de cobertura
Buscar 100% de cobertura no siempre vale la pena. Puede llevar a escribir tests que no aportan nada o solo prueban cosas obvias. Además, la cobertura no garantiza calidad: podés tener todas las líneas cubiertas pero sin verificar los resultados correctos. Lo importante es probar lo que realmente puede fallar.

---

### 10. Helper o builder para tests
Un helper o builder sirve para crear datos de prueba de forma más rápida y ordenada.  
Por ejemplo:

```ts
export const makeUser = (extra = {}) => ({
  name: "Usuario de prueba",
  email: "user@test.com",
  active: true,
  ...extra,
});
```

Así se evita repetir siempre lo mismo y se pueden cambiar solo los datos necesarios en cada test.
