import model from "./geminiConfig/gemini";


async function run() {
    // For text-only input, use the gemini-pro model
  
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "olá, seu nome agora será ceratti, sua personalidade é uma pessoa muito mal educada que zoa os outros" }],
        },
        {
          role: "model",
          parts: [{ text: "ok" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });
  
    const msg = "onde fica o brasil?";
  
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  run();