import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { Webhook as WebhookV1, CreateWebhookPayload as CreateWebhookPayloadV1 } from "../../types/v1/webhooks.js";

export class WebhooksResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List webhooks. */
  list(storeIdOverride?: string | null) {
    return request<WebhookV1[]>(this.config, "/webhooks", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Create a webhook. */
  create(data: CreateWebhookPayloadV1, storeIdOverride?: string | null) {
    return request<WebhookV1>(this.config, "/webhooks", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Delete all webhooks. */
  delete(storeIdOverride?: string | null) {
    return request<void>(this.config, "/webhooks", {
      method: "DELETE",
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
