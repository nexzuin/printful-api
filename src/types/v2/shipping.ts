/** V2 Shipping rate payload. */
export interface ShippingRateRequestV2 {
  shipping_method: string;
  recipient: {
    country_code: string;
    state_code?: string;
    city?: string;
    zip?: string;
  };
  items: {
    catalog_variant_id: number;
    quantity: number;
  }[];
}

/** V2 Shipping rate. */
export interface ShippingRateV2 {
  id: string;
  name: string;
  rate: string;
  currency: string;
  min_delivery_days: number;
  max_delivery_days: number;
  min_delivery_date: string;
  max_delivery_date: string;
}
