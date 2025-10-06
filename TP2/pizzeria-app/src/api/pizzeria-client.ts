// src/api/pizzeria-client.ts
import type { PizzaItem, OrderStatus, Order } from '../types/order';

const BASE_URL = 'http://localhost:3000'; // El servidor MSW intercepta esta URL

// Helper central para manejar errores HTTP y el formato JSON
async function handleResponse<T>(response: Response): Promise<T> {
    const errorText = await response.text();
    
    if (!response.ok) {
        // Esto es clave para que los tests de integración 409 y 422 pasen
        // Lanzamos el error con el Status y el mensaje del servidor simulado (MSW)
        throw new Error(`${response.status}: ${errorText}`);
    }
    
    try {
        // Intentar parsear el JSON
        return JSON.parse(errorText) as T;
    } catch (e) {
        // Si la respuesta no es JSON pero fue OK (ej. 204 No Content), devolvemos el texto o un objeto vacío.
        throw new Error(`Error al parsear JSON: ${errorText}`);
    }
}

// POST /orders
export async function createOrder(items: PizzaItem[], address: string): Promise<Order> {
    const response = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, address }),
    });
    return handleResponse(response);
}

// POST /orders/:id/cancel
export async function cancelOrder(orderId: string): Promise<Order> {
    const response = await fetch(`${BASE_URL}/orders/${orderId}/cancel`, {
        method: 'POST',
    });
    return handleResponse(response);
}

// GET /order/:id
export async function getOrder(orderId: string): Promise<Order> {
    const response = await fetch(`${BASE_URL}/order/${orderId}`);
    return handleResponse(response);
}

// GET /orders?status
export async function getOrders(status: OrderStatus): Promise<Order[]> {
    const response = await fetch(`${BASE_URL}/orders?status=${status}`);
    return handleResponse(response);
}