import storage from 'node-persist'
import { Router, Request, Response } from 'express'
import Model from '../models/models'

export default class OrdersCtrl {

    public static async getOrders(req: Request, res: Response){
        const orders = await Model.findOrders();
        res.json(orders);
    }

    public static async getIdOrders(req: Request, res: Response){

        const id = req.params.id
        const orders = await Model.findOrders();
        const result = Model.finId(orders, id)
        if (!result) {
            res.sendStatus(404)
        }

        res.json(result)
    }

    public static async postOrders(req: Request, res: Response){

        const payload = req.body;
        const orders = await Model.findOrders();
        const alreadyExists = Model.findPayload(payload);

        if (alreadyExists) {
            res.sendStatus(409)
        }

        orders.push(payload)
        await storage.setItem('orders', orders)
        res.sendStatus(201)
    }

}