import model from "../geminiConfig/gemini";
import { Request, Response} from 'express';
// import {ChatHistory, addTextToParts} from '../ChatHistory/history'

import {historyChat, addTextToParts} from "../ChatHistory/history";
import { text } from "stream/consumers";


const chat = model.startChat(historyChat);


//0 = USER
//1 = MODEL


const startchat = async (req: Request, res: Response): Promise<any> => {
    
    try {

        const messageuser = req.body.messageuser;
        addTextToParts(0, messageuser)
        const result = await chat.sendMessage(messageuser);
        const response = result.response;
        const text = response.text();
        addTextToParts(1, text)
    
        return res.status(200).json({ bot: text });
    } catch (error) {
        console.error("Error in startchat:", error);
        return res.status(500).json({ error: 'erro server internal' });
    }
};



export default startchat;
