import { Router, Request, Response } from 'express'
import storage from 'node-persist'
import OrderControllers from '../controllers/ordersController'
const router = Router()

router.get('/', async (req: Request, res: Response) => {
  OrderControllers.getOrder(req,res); 
})

router.get('/:id', async (req: Request, res: Response) => {
  OrderControllers.getOrderbyId(req,res); 
})

router.post('/', async (req: Request, res: Response) => {
  OrderControllers.addOrder(req,res)  
})

export default router