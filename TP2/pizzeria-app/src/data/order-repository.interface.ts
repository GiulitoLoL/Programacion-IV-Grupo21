// Define el "Contrato" de la base de datos
import type { Order } from '../types/order';

export interface IOrderRepository {
    save(order: Order): Promise<Order>;
    findById(id: string): Promise<Order | undefined>;
    findByStatus(status: string): Promise<Order[]>;
    // Método para simular la cancelación, si lo necesitas
    updateStatus(id: string, newStatus: string): Promise<Order | undefined>;
}