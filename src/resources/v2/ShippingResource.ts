import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { ShippingRateRequestV2, ShippingRateV2 } from "../../types/v2/shipping.js";

export class ShippingV2Resource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** Get shipping rates (V2). */
  rates(data: ShippingRateRequestV2, storeIdOverride?: string | null) {
    return request<ShippingRateV2[]>(this.config, "/v2/shipping-rates", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
