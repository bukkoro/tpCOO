import { Router, Request, Response } from 'express'

export default class Index {

    public static HelloWorld(req: Request, res: Response): any{
        res.send("Hello world this is meee")
    }
}