// __tests__/business.test.ts (Se ejecuta PRIMERO)

import { calculatePrice, validateOrderBody, isCancelable } from '../src/utils/business-logic';
import { BASE_PRICES, PizzaItem, TOPPING_PRICE } from '../src/types/order';

describe('Business Rules Unit Tests (Pizzeria)', () => {
    
    // Test: Precio calculado (size + toppings)
    it('should calculate the total price correctly (size L + 3 toppings)', () => {
        const item = { size: 'L', toppings: ['t1', 't2', 't3'] } as PizzaItem;
        const expectedPrice = BASE_PRICES[item.size] + (3 * TOPPING_PRICE); // 20 + 6 = 26
        expect(calculatePrice(item)).toBe(expectedPrice);
    });

    // Test: Máx. 5 toppings
    it('should throw error if an item exceeds 5 toppings (Validation)', () => {
        const item = { size: 'M', toppings: ['t1', 't2', 't3', 't4', 't5', 't6'] } as PizzaItem;
        expect(() => validateOrderBody([item], 'Dir. 1234567890')).toThrow(/máximo de 5 toppings/);
    });

    // Test: address min 10
    it('should throw error if address is less than 10 characters (Validation)', () => {
        const item = { size: 'S', toppings: [] } as PizzaItem;
        expect(() => validateOrderBody([item], 'short')).toThrow(/al menos 10 caracteres/);
    });

    // Test: items[] no vacío (Error 422)
    it('should throw error if items array is empty (Validation)', () => {
        expect(() => validateOrderBody([], 'Dirección Larga 123')).toThrow('422: El cuerpo de la orden no puede tener items vacíos.');
    });

    // Test: No se puede cancelar si status = delivered
    it('should return false if order status is "delivered"', () => {
        expect(isCancelable('delivered')).toBe(false);
    });
    
    it('should return true if order status is "pending"', () => {
        expect(isCancelable('pending')).toBe(true);
    });
});