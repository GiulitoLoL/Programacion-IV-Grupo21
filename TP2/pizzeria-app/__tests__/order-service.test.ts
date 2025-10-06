// src/__tests__/order-service.test.ts
import { 
    createOrder, 
    cancelOrder, 
    validateOrderBody, 
    BASE_PRICES,
    TOPPING_PRICE 
} from '../src/utils/order-service';
import { Order, PizzaItem } from '../src/types/order';

describe('Pizzeria Order Service', () => {
    const validItems: PizzaItem[] = [
        { size: 'M', toppings: ['cheese', 'mushrooms'] }
    ];
    const validAddress = 'Calle Falsa 1234, Bahía Blanca';

    // --- TEST: POST /orders (Creación y Precio) ---
    describe('createOrder', () => {
        
        it('should create an order with correct total price', () => {
            const priceExpected = BASE_PRICES['M'] + (2 * TOPPING_PRICE); // 15 + 4 = 19
            const order = createOrder(validItems, validAddress);
            
            expect(order.totalPrice).toBe(priceExpected);
            expect(order.status).toBe('pending');
            expect(order).toHaveProperty('id');
        });
        
        // Error 422: items[] vacío
        it('should throw 422 error if items array is empty', () => {
            expect(() => createOrder([], validAddress)).toThrow('422: El cuerpo de la orden no puede tener items vacíos.');
        });
        
        // Error 422: address min 10
        it('should throw 422 error if address is less than 10 chars', () => {
            expect(() => createOrder(validItems, 'corto')).toThrow('422: La dirección debe tener al menos 10 caracteres.');
        });
        
        // Regla: máx. 5 toppings
        it('should throw 422 error if an item exceeds 5 toppings', () => {
            const invalidItems: PizzaItem[] = [
                { size: 'S', toppings: ['t1', 't2', 't3', 't4', 't5', 't6'] }
            ];
            expect(() => createOrder(invalidItems, validAddress)).toThrow('422: Item 0 excede el máximo de 5 toppings.');
        });
    });

    // --- TEST: POST /orders/:id/cancel ---
    describe('cancelOrder', () => {
        const mockOrder: Order = {
            id: '123',
            items: validItems,
            address: validAddress,
            status: 'pending',
            totalPrice: 19,
            createdAt: new Date(),
        };

        it('should change status to "canceled" if status is "pending"', () => {
            const canceledOrder = cancelOrder(mockOrder);
            expect(canceledOrder.status).toBe('canceled');
        });

        // Error 409: intentar cancelar entregado
        it('should throw 409 error if order is "delivered"', () => {
            const deliveredOrder = { ...mockOrder, status: 'delivered' as const }; // 'as const' para forzar el tipo
            expect(() => cancelOrder(deliveredOrder)).toThrow('409: No se puede cancelar una orden que ya ha sido entregada.');
        });
    });
});