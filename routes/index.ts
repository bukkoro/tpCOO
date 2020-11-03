import { Router, Request, Response } from 'express'
import Index from '../controllers/indexController'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  Index.HelloWorld(req, res)
})

router.get('/favicon.ico', (req: Request, res: Response) => res.status(204))

export default router