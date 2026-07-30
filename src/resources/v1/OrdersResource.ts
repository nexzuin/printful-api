import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { PaginationParams } from "../../types/v1/common.js";
import type {
  Order,
  CreateOrderPayload,
  EstimateCostsPayload,
} from "../../types/v1/orders.js";

export class OrdersResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List orders. */
  list(params?: PaginationParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<Order[]>(this.config, `/orders${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Create a new order. */
  create(data: CreateOrderPayload, storeIdOverride?: string | null) {
    return request<Order>(this.config, "/orders", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get order by ID. */
  get(orderId: string | number, storeIdOverride?: string | null) {
    return request<Order>(this.config, `/orders/${orderId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Update an order. */
  update(orderId: string | number, data: Partial<CreateOrderPayload>, storeIdOverride?: string | null) {
    return request<Order>(this.config, `/orders/${orderId}`, {
      method: "PUT",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Delete an order. */
  delete(orderId: string | number, storeIdOverride?: string | null) {
    return request<void>(this.config, `/orders/${orderId}`, {
      method: "DELETE",
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Confirm draft order for fulfillment. */
  confirm(orderId: string | number, storeIdOverride?: string | null) {
    return request<Order>(this.config, `/orders/${orderId}/confirm`, {
      method: "POST",
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Estimate shipping costs for an order. */
  estimateCosts(data: EstimateCostsPayload, storeIdOverride?: string | null) {
    return request<Order>(this.config, "/orders/estimate-costs", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
