// Implementación In-Memory (el "Stub" para la DB)
import type { Order } from '../types/order';
import type { IOrderRepository } from './order-repository.interface';

// Un array actúa como nuestra "tabla" de DB temporal
const orderStore: Order[] = [];

export class InMemoryOrderRepository implements IOrderRepository {
    async save(order: Order): Promise<Order> {
        orderStore.push(order);
        return order;
    }

    async findById(id: string): Promise<Order | undefined> {
        return orderStore.find(o => o.id === id);
    }

    async findByStatus(status: string): Promise<Order[]> {
        return orderStore.filter(o => o.status === status);
    }
    
    async updateStatus(id: string, newStatus: string): Promise<Order | undefined> {
        const index = orderStore.findIndex(o => o.id === id);
        if (index === -1) return undefined;
        
        orderStore[index] = { ...orderStore[index], status: newStatus as any };
        return orderStore[index];
    }
}