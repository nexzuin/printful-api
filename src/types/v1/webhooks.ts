/** V1 Webhook configuration. */
export interface Webhook {
  id: number;
  url: string;
  type: string;
  params: Record<string, unknown>;
}

/** Payload for POST /webhooks. */
export interface CreateWebhookPayload {
  url: string;
  type: string;
  params?: Record<string, unknown>;
}
