import storage from 'node-persist'

export default class Model{
    public static  findOrders(){
         storage.getItem('orders')
    }
}