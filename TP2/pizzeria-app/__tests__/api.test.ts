// __tests__/api.test.ts

import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { createOrder, cancelOrder, getOrder, getOrders } from '../src/api/pizzeria-client'; // Aún no existe
import { OrderStatus } from '../src/types/order';

interface CreateOrderRequestBody {
    items: any[];
}

const server = setupServer(
    
    
    // 1. POST /orders
    http.post('/orders', async ({ request }) => {
        const body = await request.json() as CreateOrderRequestBody;
        // Simulación de validación (422)
        if (!body.items || body.items.length === 0) {
            return new HttpResponse('422: El cuerpo de la orden no puede tener items vacíos.', { status: 422 });
        }
        return HttpResponse.json({ id: 'ORD-123', status: 'pending', totalPrice: 25 }, { status: 201 });
    }),
    
    // 2. POST /orders/:id/cancel
    http.post('/orders/:id/cancel', async ({ params }) => {
        const { id } = params;
        // Simulación de regla de negocio (409)
        if (id === 'delivered-order') {
            return new HttpResponse('409: No se puede cancelar una orden que ya ha sido entregada.', { status: 409 });
        }
        return HttpResponse.json({ id, status: 'canceled' }, { status: 200 });
    }),

    // 3. GET /orders?status
    http.get('/orders', ({ request }) => {
        const url = new URL(request.url);
        const status = url.searchParams.get('status');
        if (status === 'pending') {
            return HttpResponse.json([{ id: 'ORD-P1', status: 'pending' }], { status: 200 });
        }
        return HttpResponse.json([], { status: 200 });
    }),

    // 4. GET /order/:id
    http.get('/order/:id', () => {
        return HttpResponse.json({ id: 'ORD-123', status: 'pending' }, { status: 200 });
    }),
);

// Iniciar/Detener el servidor MSW para todos los tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('HTTP Contract Integration Tests (Pizzeria API)', () => {
    
    // Test: POST /orders
    it('should successfully create an order and return 201 status', async () => {
        const order = await createOrder([{ size: 'M', toppings: ['t1'] }], 'Dir. Larga 123');
        expect(order.id).toBe('ORD-123');
        expect(order.status).toBe('pending');
    });

    // Test: Error 422 si items vacío
    it('should throw an error on 422 for empty items array', async () => {
        // MSW simula el 422 si el body.items está vacío
        await expect(createOrder([], 'Dir. Larga')).rejects.toThrow('422');
    });

    // Test: POST /orders/:id/cancel
    it('should successfully cancel an order', async () => {
        const canceledOrder = await cancelOrder('ORD-PENDING');
        expect(canceledOrder.status).toBe('canceled');
    });

    // Test: Error 409 si intenta cancelar entregado
    it('should throw a 409 error when trying to cancel a delivered order', async () => {
        // MSW simula el 409 cuando el ID es 'delivered-order'
        await expect(cancelOrder('delivered-order')).rejects.toThrow('409');
    });

    // Test: GET /orders?status
    it('should fetch pending orders correctly', async () => {
        const pendingOrders = await getOrders('pending' as OrderStatus);
        expect(pendingOrders.length).toBe(1);
        expect(pendingOrders[0].id).toBe('ORD-P1');
    });
    
    // Test: GET /order/:id
    it('should fetch a single order by ID', async () => {
        const order = await getOrder('ORD-123');
        expect(order.id).toBe('ORD-123');
    });
});