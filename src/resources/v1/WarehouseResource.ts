import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { WarehouseProduct } from "../../types/v1/warehouse.js";

export class WarehouseResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List warehouse products. */
  list(storeIdOverride?: string | null) {
    return request<WarehouseProduct[]>(this.config, "/warehouse/products", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get warehouse product by ID. */
  get(productId: number, storeIdOverride?: string | null) {
    return request<WarehouseProduct>(this.config, `/warehouse/products/${productId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
