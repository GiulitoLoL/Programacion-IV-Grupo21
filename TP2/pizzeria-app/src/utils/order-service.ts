// src/utils/order-service.ts
import type { 
    Order, 
    PizzaItem, 
    PizzaSize, 
    OrderStatus 
} from '../types/order';
import {
    BASE_PRICES, 
    TOPPING_PRICE
} from '../types/order';

// Helpers
const calculatePrice = (item: PizzaItem): number => {
    const base = BASE_PRICES[item.size];
    const toppingCost = item.toppings.length * TOPPING_PRICE;
    return base + toppingCost;
};

// --- VALIDACIONES DE NEGOCIO ---
// Reglas 4, 5, 6
export const validateOrderBody = (items: PizzaItem[], address: string) => {
    // 4. Validación: body con items[] no vacío
    if (!items || items.length === 0) {
        throw new Error('422: El cuerpo de la orden no puede tener items vacíos.'); 
    }
    
    // 4. Validación: address min 10
    if (address.length < 10) {
        throw new Error('422: La dirección debe tener al menos 10 caracteres.'); 
    }

    // 5. Regla: Máx. 5 toppings y 6. Regla: size está en {S,M,L}
    items.forEach((item, index) => {
        if (item.toppings.length > 5) {
            throw new Error(`422: Item ${index} excede el máximo de 5 toppings.`);
        }
        if (!['S', 'M', 'L'].includes(item.size)) {
            throw new Error(`422: Item ${index} tiene un tamaño inválido.`);
        }
    });
};

// --- ENDPOINTS Y REGLAS ---

/**
 * POST /orders - Crea una nueva orden.
 * * Regla: precio calculado (size + toppings).
 * Errores: 422 si items vacío o address < 10.
 */
export const createOrder = (items: PizzaItem[], address: string): Order => {
    validateOrderBody(items, address); // Lanza 422 si falla

    const totalPrice = items.reduce((sum, item) => sum + calculatePrice(item), 0);
    
    const newOrder: Order = {
        id: crypto.randomUUID(), // Genera un ID único (simulando backend)
        items,
        address,
        status: 'pending',
        totalPrice,
        createdAt: new Date(),
    };
    
    return newOrder;
};

/**
 * POST /orders/:id/cancel - Cancela una orden.
 * * Regla: no se puede cancelar si status = delivered.
 * Errores: 409 si intenta cancelar entregado.
 */
export const cancelOrder = (order: Order): Order => {
    // Regla 5 + Error 409
    if (order.status === 'delivered') {
        throw new Error('409: No se puede cancelar una orden que ya ha sido entregada.');
    }
    
    // Si la orden ya está cancelada o pendiente/preparando, la cancelamos
    return { ...order, status: 'canceled' };
};

// GET /order/:id, GET /orders?status (simuladas)
// En un backend real, serían funciones de base de datos.
// Aquí simplemente devolvemos la orden o un array.
export const getOrderById = (id: string, store: Order[]): Order | undefined => {
    return store.find(o => o.id === id);
};

export const getOrdersByStatus = (status: OrderStatus, store: Order[]): Order[] => {
    return store.filter(o => o.status === status);
};

export { TOPPING_PRICE, BASE_PRICES };
