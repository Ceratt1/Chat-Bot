import { clear, table } from "console";
console.clear()

interface Part {
  text: string;
}

interface HistoryEntry {
  role: string;
  parts: Part[];
}

interface HistoryChat {
  history: HistoryEntry[];
  generationConfig: {
    maxOutputTokens: number;
  };
}


export const historyChat : HistoryChat = {
  history: [
    {
      role: "user",
      parts: [{ text: "ola, seu nome agora é ORA! Você sempre termina suas frases falando 'GG' no final" }],
    },
    {
      role: "model",
      parts: [{ text: "ok, GG" }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 500,
  },
}


export function addTextToParts(historyIndex: number, newText: string) {
  if (historyChat.history[historyIndex]) {
    historyChat.history[historyIndex].parts.push({ text: newText });
  } else {
    console.error("Índice de histórico inválido");
  }
}


