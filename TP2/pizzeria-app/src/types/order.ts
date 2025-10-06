// src/types/order.ts

export type PizzaSize = 'S' | 'M' | 'L';
export type OrderStatus = 'pending' | 'preparing' | 'delivered' | 'canceled';

// Precios base
export const BASE_PRICES: Record<PizzaSize, number> = {
    S: 10,  // $10
    M: 15,  // $15
    L: 20,  // $20
};
export const TOPPING_PRICE = 2; // $2 por topping

export interface PizzaItem {
    size: PizzaSize;
    toppings: string[];
}

export interface Order {
    id: string;
    items: PizzaItem[];
    address: string;
    status: OrderStatus;
    totalPrice: number;
    createdAt: Date;
}