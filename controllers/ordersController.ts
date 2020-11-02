import storage from 'node-persist'
import Model from '../models/model'

export default class OrderControllers {

    public static async getOrders(req: Request, res: Response){
        const orders = await Model.findOrders();
        res.json(orders);
    }

    public static async getOrderbyId(req: any, res : any)  {
        const id = req.params.id

        const orders = await storage.getItem('orders')
        const result = orders.find((order: any) => order.id === parseInt(id, 10))

        if (!result) {
            res.sendStatus(404)
        }

        res.json(result)
    } 

    public static async addOrder(req: any, res : any)  {
        const payload = req.body
        const orders = await storage.getItem('orders')
        const alreadyExists = orders.find((order: any) => order.id === payload.id)

        if (alreadyExists) {
            return res.sendStatus(409)
        }

        orders.push(payload)

        await storage.setItem('orders', orders)

        res.sendStatus(201)
    }

}