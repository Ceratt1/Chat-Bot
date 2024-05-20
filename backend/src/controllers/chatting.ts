import model from "../geminiConfig/gemini";
import { Request, Response} from 'express';
import ChatHistory from '../ChatHistory/history'
import { text } from "stream/consumers";


const chat = model.startChat(ChatHistory);





const startchat = async (req: Request, res: Response): Promise<any> => {
    
    try {

        const messageuser = req.body.messageuser;
        const result = await chat.sendMessage(messageuser);
        const response = result.response;
        const text = response.text();
    
        return res.status(200).json({ bot: text });
    } catch (error) {
        console.error("Error in startchat:", error);
        return res.status(500).json({ error: 'erro server internal' });
    }
};



export default startchat;
