import type { Address } from "./common.js";

/** V1 Order status. */
export type OrderStatus =
  | "draft"
  | "pending"
  | "failed"
  | "canceled"
  | "inprocess"
  | "onhold"
  | "fulfilled"
  | "partial";

/** V1 Order. */
export interface Order {
  id: number;
  external_id: string | null;
  store: number;
  status: OrderStatus;
  shipping: string;
  shipping_service_name: string;
  costs: OrderCosts;
  retail_costs: OrderCosts;
  created: number;
  updated: number;
  items: OrderItem[];
  recipient: Address;
  notes: string | null;
}

/** V1 Order item. */
export interface OrderItem {
  id: number;
  catalog_variant_id: number | null;
  product_id: number | null;
  sync_variant_id: number;
  external_variant_id: string | null;
  warehouse_product_variant_id: number | null;
  quantity: number;
  price: string;
  retail_price: string;
  name: string;
  product: {
    variant_id: number;
    product_id: number;
    image: string;
    name: string;
  };
  sku: string | null;
  files: SyncFile[];
  options: Record<string, string>;
}

/** Reuse SyncFile from catalog types. */
import type { SyncFile } from "./catalog.js";
export type { SyncFile };

/** Order cost breakdown. */
export interface OrderCosts {
  currency: string;
  subtotal: string;
  discount: string;
  shipping: string;
  digitization: string;
  tax: string;
  vat: string;
  total: string;
}

/** Payload for POST /orders */
export interface CreateOrderPayload {
  external_id?: string;
  shipping: string;
  shipping_service_name?: string;
  recipient: Address;
  items: CreateOrderItem[];
  retail_costs?: Partial<OrderCosts>;
  packing_slip?: Record<string, string>;
  notes?: string;
}

/** Item in a create-order payload. */
export interface CreateOrderItem {
  sync_variant_id: number;
  quantity: number;
  retail_price?: string;
  files?: {
    url: string;
    filename?: string;
    type?: string;
    options?: Record<string, string>;
  }[];
  options?: Record<string, string>;
}

/** Payload for POST /orders/estimate-costs */
export interface EstimateCostsPayload {
  shipping: string;
  recipient: Address;
  items: {
    sync_variant_id: number;
    quantity: number;
    retail_price?: string;
  }[];
}
