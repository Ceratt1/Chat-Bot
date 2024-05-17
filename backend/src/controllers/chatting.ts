import model from "../geminiConfig/gemini";
import { Request, Response} from 'express';

const startchat = async (req: Request, res: Response): Promise<any> => {
    console.log(req.body);

    try {
        const chat = model.startChat({
            history: [{
                role: "user",
                parts: [{ text: "seu nome agora é ORA, você é amigo do Ceratti, está sendo utilizado atualmente para servir de estudo para um chat bot" }],
              },
              {
                role: "model",
                parts: [{ text: "meu amigo é o ceratti e estou sendo usando para criar um chat bot" }],
              },],
            generationConfig: {
                maxOutputTokens: 100,
            },
        });
    
        const messageuser = req.body.messageuser;
        
        const result = await chat.sendMessage(messageuser);
        const response = await result.response;
        const text = await response.text();
    
        return res.status(200).json({ bot: text });
    } catch (error) {
        console.error("Error in startchat:", error);
        return res.status(500).json({ error: 'erro server internal' });
    }
};



export default startchat;

