import model from "../geminiConfig/gemini";
import { Request, Response} from 'express';

const chat = model.startChat({
    history: [],
    generationConfig: {
        maxOutputTokens: 100,
    },
});





const startchat = async (req: Request, res: Response): Promise<any> => {
    
    try {

        const messageuser = req.body.messageuser;

        const result = await chat.sendMessage(messageuser);
        console.table(result)
        const response = result.response;
        const text = response.text();
    
        return res.status(200).json({ bot: text });
    } catch (error) {
        console.error("Error in startchat:", error);
        return res.status(500).json({ error: 'erro server internal' });
    }
};



export default startchat;
