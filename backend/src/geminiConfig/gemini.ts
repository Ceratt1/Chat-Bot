import dotenv from 'dotenv';
import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
dotenv.config();
const apiKey: string | undefined = process.env.API_KEY;

if (!apiKey) {
    throw new Error("API_KEY não está definida");
}
const genAI = new GoogleGenerativeAI(apiKey);

let model: GenerativeModel;

try {
    const modelName = 'gemini-pro'; 
    model = genAI.getGenerativeModel({ model: modelName });
    console.log('Modelo obtido com sucesso');
} catch (error) {
    console.error('Erro ao obter o modelo:', error);
    throw error; // Opcional: relançar o erro para que a falha seja propagada
}

// Exporta o modelo
export default model;