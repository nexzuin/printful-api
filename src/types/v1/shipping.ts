import type { Address } from "./common.js";

/** Payload for POST /shipping/rates. */
export interface ShippingRateRequest {
  recipient: Address;
  items: ShippingRateItem[];
}

/** Item in a shipping rate request. */
export interface ShippingRateItem {
  variant_id: number;
  quantity: number;
  warehouse_product_variant_id?: number;
  external_id?: string;
}

/** Shipping rate response per carrier/service. */
export interface ShippingRate {
  id: string;
  name: string;
  rate: string;
  currency: string;
  min_delivery_days: number;
  max_delivery_days: number;
  min_delivery_date: string;
  max_delivery_date: string;
}
