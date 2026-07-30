/** V2 Webhook. */
export interface WebhookV2 {
  event_type: string;
  url: string;
  created_at: string;
}

/** Payload for POST /v2/webhooks. */
export interface CreateWebhookPayloadV2 {
  event_type: string;
  url: string;
}
