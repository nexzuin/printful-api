import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { ShippingRateRequest, ShippingRate } from "../../types/v1/shipping.js";

export class ShippingResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** Get shipping rates. */
  rates(data: ShippingRateRequest, storeIdOverride?: string | null) {
    return request<ShippingRate[]>(this.config, "/shipping/rates", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
