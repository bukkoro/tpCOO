import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import storage from 'node-persist'

import indexRouter from './routes/index'
import ordersRouter from './routes/orders'

import { orders } from './data/_orders'

export default class App {
  public instance: any;

  constructor () {

    this.instance = express()

    this.registerMiddlewares()
    this.registerRoutes()
    this.initDefaultData()
  }

  private initDefaultData(): void {
    // Init default data
    storage.init().then(() => {
    storage.setItem('orders', orders)
    })

  }

  private registerRoutes(): void {
    this.instance.use('/', indexRouter)
    this.instance.use('/orders', ordersRouter)
  }

  private registerMiddlewares(): void {
    this.instance.use(logger('dev'))
    this.instance.use(express.json())
    this.instance.use(express.urlencoded({ extended: false }))
    this.instance.use(cookieParser())
    this.instance.use(express.static(path.join(__dirname, 'public')))
    
  }

}
