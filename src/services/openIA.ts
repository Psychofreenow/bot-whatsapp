import { env } from "@config/env";
import OpenAI from "openai";

export const extractTextImageOpenIA = async (base64String: string) => {
  const client = new OpenAI({
    apiKey: env.OPENAI_KEY,
  });

  const response = await client.responses.create({
    model: "gpt-4.1",
    input: [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: "listame en esta imagen los productos y precios",
          },
          {
            type: "input_image",
            image_url: `data:image/jpeg;base64,${base64String}`,
            detail: "auto",
          },
        ],
      },
    ],
  });

  console.log(response.output_text);
};
