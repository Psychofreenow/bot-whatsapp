import fs from "fs";
import path from "path";

import { env } from "@config/env";

export const downloadWebhookImage = async (image: {
  id: string;
  url: string;
  mime_type?: string;
}): Promise<{ filePath: string; buffer: Buffer }> => {
  try {
    // Asegura carpeta
    const dir = path.join(process.cwd(), "files");
    fs.mkdirSync(dir, { recursive: true });

    // Descarga binaria (OJO: requiere token)
    const res = await fetch(image.url, {
      headers: {
        Authorization: `Bearer ${env.USER_ACCESS_TOKEN}`, // idealmente token válido de WhatsApp
      },
    });

    if (!res.ok) {
      throw new Error(`Download failed ${res.status}: ${await res.text()}`);
    }

    const buffer = Buffer.from(await res.arrayBuffer());

    // Extensión según mime
    const ext =
      image.mime_type === "image/png"
        ? "png"
        : image.mime_type === "image/webp"
          ? "webp"
          : "jpg"; // default jpeg

    const filePath = path.join(dir, `${image.id}.${ext}`);
    fs.writeFileSync(filePath, buffer);

    return { filePath, buffer };
  } catch (error) {
    console.error("Error downloading webhook image:", error);
    throw error;
  }
};
