import type { Request, Response } from "express";

import { webhookEntryRespository } from "@/repository/sqlite/webhookEntry.repository";

export const webhookWsGetController = (req: Request, res: Response) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
    console.log("WEBHOOK VERIFIED");
    // Facebook espera el challenge "tal cual"
    return res.status(200).type("text/plain").send(String(challenge));
  }

  return res.sendStatus(403);
};

export const webhookWsPostController = async (req: Request, res: Response) => {
  res.sendStatus(200); // Responde rápido a Facebook para evitar reintentos

  const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);
  console.log(`\n\nWebhook received ${timestamp}\n`);

  const webhookEntry = await webhookEntryRespository(req.body);

  console.log("Webhook payload saved to database.", webhookEntry);

  // const image = req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.image;

  // if (image) {
  //   const { filePath, buffer } = await downloadWebhookImage(image);

  //   if (buffer) {
  //     await extractTextImageGemini(buffer.toString("base64"));
  //     console.log(`Image saved to ${filePath}`);
  //   }
  // } else {
  //   console.log("No image found in the webhook payload.");
  // }
  // console.log(JSON.stringify(req.body, null, 2));
};
