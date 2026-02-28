import type {
  TransformedWebhookResponse,
  WebhookResponse,
} from "@/types/webhook-response";

export const transformResponseWebhook = (
  response: WebhookResponse,
): TransformedWebhookResponse[] => {
  const { entry } = response;

  const transformedData = entry.map((entryItem) => {
    const { id, changes } = entryItem;

    const transformedChanges = changes.map((change) => {
      const { value } = change;
      const { messaging_product, metadata, contacts, messages } = value;

      return {
        messaging_product,
        metadata,
        contacts,
        messages,
      };
    });

    return {
      webhookId: id,
      changes: transformedChanges,
    };
  });

  return transformedData;
};

export const transformValueInWebhookResponse = (
  response: TransformedWebhookResponse,
) => {};
