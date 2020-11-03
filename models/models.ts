import storage from 'node-persist'

export default class Model{
    public static findOrders(){
        return storage.getItem('orders')
    }

    public static finId(orders: any, id: any){
    
        const result = orders.find((order: any) => order.id === parseInt(id, 10));
        return result;

    }

    public static async findPayload(payload: any){

        const orders = await this.findOrders();
        const alreadyExists = orders.find((order: any) => order.id === payload.id)
        return alreadyExists;

    }
}
