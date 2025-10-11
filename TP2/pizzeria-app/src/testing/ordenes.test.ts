import { test, expect, describe } from "vitest";
import { OrdersInterface } from "./../models/interface/ordenes.interface";
import { MockOrdenes } from "./../models/mockOrdenes";
import { Order } from "./../models/orden";

describe("prueba de orderInterface", ()=>{
    const id = 1;
    const order:Order = new Order(id, "preparada");
    const order2:Order = new Order(2, "cancelado");
    const crud:OrdersInterface = new MockOrdenes();


    test("POST /order",()=>{
        crud.addOrder(order);
        expect(crud.size()).toBe(1);
    })

    test("GET /order/id", ()=>{
        expect(crud.getOrder(id)).equals(order)
    })
    
    test("POST /order/id/cancel", ()=>{
        expect(crud.getOrder(id)?.setEstado("cancelado")).equals(order.setEstado("cancelado"))
    })

    test("GET /order?status",()=>{
        expect(crud.getOrder(id)?.getEstado()).equals(order.getEstado())
    })
})