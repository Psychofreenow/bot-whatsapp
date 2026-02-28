import { GoogleGenAI } from "@google/genai";

import { env } from "@config/env";

const ai = new GoogleGenAI({
  apiKey: env.GEMINI_KEY,
}); // toma GEMINI_API_KEY del env

export const extractTextImageGemini = async (base64String: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64String,
        },
      },
      {
        text: "Listame los productos de la factura junto con su precio y cantidad, sin incluir el total ni impuestos. No me devuelvas otras descripciones innecesarias ni comentarios de rellenos. Limite a delvolver exactamente lo que se pide. Devuelvelo en formato JSON con el siguiente formato: [{nombre: string, precio: number, cantidad: number}]. El json deber ser el único contenido de tu respuesta, sin texto adicional ni explicaciones. Evitar formatear las respuestas con markdown ni incluir código, solo el JSON plano.",
      },
    ],
  });

  console.log(response.text);
};
