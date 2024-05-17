import express, { Request, Response, Router } from 'express';
const router : Router = express.Router();


router.get('/', (req : Request, res : Response) => res.status(200).json({message : "vocẽ está no root"}));



export default router