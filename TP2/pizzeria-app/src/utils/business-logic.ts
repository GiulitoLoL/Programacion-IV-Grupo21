// src/utils/business-logic.ts
import type { PizzaItem, PizzaSize, OrderStatus } from '../types/order';
import { BASE_PRICES, TOPPING_PRICE } from '../types/order';

/**
 * TEST UNITARIO: Calcula el precio total (L + 3 T.)
 */
export const calculatePrice = (item: PizzaItem): number => {
    // Aseguramos que el tamaño es válido antes de acceder
    if (!['S', 'M', 'L'].includes(item.size as PizzaSize)) {
        // En un caso real, esto debería ser manejado por validación antes
        return 0; 
    }
    const base = BASE_PRICES[item.size as PizzaSize];
    const toppingCost = item.toppings.length * TOPPING_PRICE;
    return base + toppingCost;
};

/**
 * TEST UNITARIO: Implementa las validaciones de las reglas 4, 5, y 6.
 * Lanza un error (simulando 422) si falla una validación.
 */
export const validateOrderBody = (items: PizzaItem[], address: string): void => {
    // 1. Validación: body con items[] no vacío (Error 422)
    if (!items || items.length === 0) {
        throw new Error('422: El cuerpo de la orden no puede tener items vacíos.');
    }
    
    // 2. Validación: address min 10
    if (address.length < 10) {
        throw new Error('422: La dirección debe tener al menos 10 caracteres.');
    }

    // 3. Regla: Máx. 5 toppings y Size válido {S, M, L}
    items.forEach((item, index) => {
        // Validación de tamaño (aunque TypeScript ayuda, se valida para el contrato)
        if (!['S', 'M', 'L'].includes(item.size as PizzaSize)) {
            throw new Error(`422: Item ${index} tiene un tamaño inválido.`);
        }
        
        // Validación: máx. 5 toppings
        if (item.toppings.length > 5) {
            throw new Error(`422: Item ${index} excede el máximo de 5 toppings.`);
        }
    });
};

/**
 * TEST UNITARIO: Regla de cancelación.
 */
export const isCancelable = (status: OrderStatus): boolean => {
    // Regla: No se puede cancelar si status = delivered.
    return status !== 'delivered';
};

/**
 * Procesa la cancelación y lanza el error 409 si es necesario.
 */
export const processCancelation = (currentStatus: OrderStatus): OrderStatus => {
    if (!isCancelable(currentStatus)) {
        // TEST INTEGRACIÓN: Simula el error 409
        throw new Error('409: No se puede cancelar una orden que ya ha sido entregada.');
    }
    return 'canceled';
};