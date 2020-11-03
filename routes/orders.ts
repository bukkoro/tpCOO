import OrdersCtrl from '../controllers/ordersController'
import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  OrdersCtrl.getOrders(req, res);
})

router.get('/:id', async (req: Request, res: Response) => {
  OrdersCtrl.getIdOrders(req, res);
})

router.post('/', async (req: Request, res: Response) => {
  OrdersCtrl.postOrders(req, res);
})

export default router