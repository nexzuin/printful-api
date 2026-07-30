import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { PaginationParams } from "../../types/v2/common.js";
import type {
  OrderV2,
  CreateOrderPayloadV2,
  OrderShipmentV2,
  OrderInvoiceV2,
  OrderEstimationTaskPayloadV2,
} from "../../types/v2/orders.js";

export class OrdersV2Resource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List orders. */
  list(params?: PaginationParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<OrderV2[]>(this.config, `/v2/orders${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Create an order. */
  create(data: CreateOrderPayloadV2, storeIdOverride?: string | null) {
    return request<OrderV2>(this.config, "/v2/orders", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get order by ID. */
  get(orderId: string, storeIdOverride?: string | null) {
    return request<OrderV2>(this.config, `/v2/orders/${orderId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Update an order (partial). */
  update(orderId: string, data: Partial<CreateOrderPayloadV2>, storeIdOverride?: string | null) {
    return request<OrderV2>(this.config, `/v2/orders/${orderId}`, {
      method: "PATCH",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Confirm order for fulfillment. */
  confirm(orderId: string, storeIdOverride?: string | null) {
    return request<OrderV2>(this.config, `/v2/orders/${orderId}/confirmation`, {
      method: "POST",
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Delete an order. */
  delete(orderId: string, storeIdOverride?: string | null) {
    return request<void>(this.config, `/v2/orders/${orderId}`, {
      method: "DELETE",
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** List order items. */
  listItems(orderId: string, params?: { type?: string }, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request(this.config, `/v2/orders/${orderId}/order-items${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Add an item to an order. */
  addItem(orderId: string, data: Record<string, unknown>, storeIdOverride?: string | null) {
    return request(this.config, `/v2/orders/${orderId}/order-items`, {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get an order item. */
  getItem(orderId: string, itemId: string, storeIdOverride?: string | null) {
    return request(this.config, `/v2/orders/${orderId}/order-items/${itemId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Update an order item. */
  updateItem(orderId: string, itemId: string, data: Record<string, unknown>, storeIdOverride?: string | null) {
    return request(this.config, `/v2/orders/${orderId}/order-items/${itemId}`, {
      method: "PATCH",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Delete an order item. */
  deleteItem(orderId: string, itemId: string, storeIdOverride?: string | null) {
    return request<void>(this.config, `/v2/orders/${orderId}/order-items/${itemId}`, {
      method: "DELETE",
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get shipments for an order. */
  shipments(orderId: string, params?: PaginationParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<OrderShipmentV2[]>(this.config, `/v2/orders/${orderId}/shipments${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get invoices for an order. */
  invoices(orderId: string, storeIdOverride?: string | null) {
    return request<OrderInvoiceV2[]>(this.config, `/v2/orders/${orderId}/invoices`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** List order estimation tasks. */
  listEstimationTasks(params?: { id?: string }, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request(this.config, `/v2/order-estimation-tasks${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Create an order estimation task. */
  createEstimationTask(data: OrderEstimationTaskPayloadV2, storeIdOverride?: string | null) {
    return request(this.config, "/v2/order-estimation-tasks", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
