/** V1 Store info. */
export interface Store {
  id: number;
  type: string;
  name: string;
  currency: string;
  packing_slip?: Record<string, string>;
}

/** Payload for POST /store/packing-slip. */
export interface PackingSlipPayload {
  store_id: number;
  packing_slip: {
    email: string;
    phone: string;
    message?: string;
    store_name?: string;
    return_address?: string;
    logo_url?: string;
  };
}
