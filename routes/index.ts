import { Router, Request, Response } from 'express'
import Index from '../controllers/indexControllers'

const router = Router()

router.get('/',  (req: Request, res: Response) => {
  /*res.send('Hello World !')*/
  Index.helloWorld(req,res); 
}
)

router.get('/favicon.ico', (req: Request, res: Response) => res.status(204))

export default router