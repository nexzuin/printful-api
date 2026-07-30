import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { WarehouseProductV2 } from "../../types/v2/warehouse.js";

export interface WarehouseListParams {
  "filter[name*]"?: string;
  limit?: number;
  offset?: number;
}

export class WarehouseV2Resource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List warehouse products. */
  list(params?: WarehouseListParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<WarehouseProductV2[]>(this.config, `/v2/warehouse-products${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get warehouse product by ID. */
  get(productId: string, storeIdOverride?: string | null) {
    return request<WarehouseProductV2>(this.config, `/v2/warehouse-products/${productId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
