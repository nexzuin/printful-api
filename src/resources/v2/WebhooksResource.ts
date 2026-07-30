import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { WebhookV2, CreateWebhookPayloadV2 } from "../../types/v2/webhooks.js";

export class WebhooksV2Resource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List webhooks. */
  list(storeIdOverride?: string | null) {
    return request<WebhookV2[]>(this.config, "/v2/webhooks", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Create a webhook. */
  create(data: CreateWebhookPayloadV2, storeIdOverride?: string | null) {
    return request<WebhookV2>(this.config, "/v2/webhooks", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get a webhook by event type. */
  get(eventType: string, storeIdOverride?: string | null) {
    return request<WebhookV2>(this.config, `/v2/webhooks/${eventType}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Delete all webhooks. */
  deleteAll(storeIdOverride?: string | null) {
    return request<void>(this.config, "/v2/webhooks", {
      method: "DELETE",
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Delete a webhook by event type. */
  delete(eventType: string, storeIdOverride?: string | null) {
    return request<void>(this.config, `/v2/webhooks/${eventType}`, {
      method: "DELETE",
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
