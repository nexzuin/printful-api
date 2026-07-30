/** V2 Order. */
export interface OrderV2 {
  id: string;
  external_id: string | null;
  store_id: number;
  status: string;
  shipping_method: string;
  shipping_service_name: string | null;
  created_at: string;
  updated_at: string;
  costs: OrderCostsV2;
  recipient: OrderRecipientV2;
  items: OrderItemV2[];
  notes: string | null;
}

export interface OrderCostsV2 {
  currency: string;
  subtotal: string;
  shipping: string;
  tax: string;
  vat: string;
  total: string;
}

export interface OrderRecipientV2 {
  name: string;
  company: string | null;
  address1: string;
  address2: string | null;
  city: string;
  state_code: string;
  country_code: string;
  zip: string;
  phone: string | null;
  email: string | null;
}

export interface OrderItemV2 {
  id: string;
  catalog_variant_id: number;
  quantity: number;
  price: string;
  name: string;
  sku: string | null;
  files: OrderFileV2[];
  options: Record<string, string>;
}

export interface OrderFileV2 {
  id: number;
  url: string;
  filename: string;
  mime_type: string;
  type: string;
  visible: boolean;
  position: string;
}

/** Payload for POST /v2/orders. */
export interface CreateOrderPayloadV2 {
  external_id?: string;
  shipping_method: string;
  shipping_service_name?: string;
  recipient: OrderRecipientV2;
  items: CreateOrderItemV2[];
  packing_slip?: Record<string, string>;
  notes?: string;
}

export interface CreateOrderItemV2 {
  catalog_variant_id: number;
  quantity: number;
  files?: {
    url: string;
    filename?: string;
    type?: string;
    options?: Record<string, string>;
  }[];
  options?: Record<string, string>;
}

/** V2 Order shipment. */
export interface OrderShipmentV2 {
  id: string;
  carrier: string;
  service: string;
  tracking_number: string;
  tracking_url: string;
  created_at: string;
}

/** V2 Order invoice. */
export interface OrderInvoiceV2 {
  id: string;
  number: string;
  url: string;
  created_at: string;
}

/** Payload for POST /v2/order-estimation-tasks. */
export interface OrderEstimationTaskPayloadV2 {
  shipping_method: string;
  recipient: OrderRecipientV2;
  items: {
    catalog_variant_id: number;
    quantity: number;
  }[];
}
