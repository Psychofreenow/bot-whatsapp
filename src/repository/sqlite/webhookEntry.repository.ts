import { prisma } from "@clients/prismaClientSqlite3";
import type { WebhookResponse } from "@/types/webhook-response";

export const webhookEntryRespository = async (entry: WebhookResponse) => {
  const res = await prisma.webhook_entry.create({
    data: {
      payload: JSON.stringify(entry),
    },
  });
  return res;
};
