import { orders } from 'data/_orders'
import storage from 'node-persist'

export default class Model{
    public static findOrders(){
        return storage.getItem('orders')
    }

    public static findId(orders:any, id: any){
        const result = orders.find((order: any)=> order.id === parseInt(id, 10));
        return result; 
    }

    public static async indPayLoad(payload:any){
        const orders = await this.findOrders(); 
        const alreadyExists = orders.find((order: any)=> order.id === payload.id)
        return alreadyExists; 
    }

}


