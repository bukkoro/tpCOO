import {Contact} from '../types';

export default class Adapter implements Contact{
    public fullname: string;
    public email: string;
    public phone: string;
    public address: string;
    public postalCode: string;
    public city: string;

    constructor(){
        this.fullname = 'fullname'
        this.email = 'email'
        this.phone = 'phone'
        this.address = 'address'
        this.postalCode= 'postalCode'
        this.city = 'city'
    }
}
