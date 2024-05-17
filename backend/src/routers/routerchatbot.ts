import express, { Request, Response, Router } from 'express';
import  chatbot  from '../controllers/chatting'; 
const routerchat: Router = express.Router();
routerchat.use(express.json());


routerchat.post('/chatbot', chatbot); 

export default routerchat;
