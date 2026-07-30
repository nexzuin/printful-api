import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { Store, PackingSlipPayload } from "../../types/v1/stores.js";

export class StoresResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List stores. */
  list(storeIdOverride?: string | null) {
    return request<Store[]>(this.config, "/stores", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get store by ID. */
  get(storeId: number, storeIdOverride?: string | null) {
    return request<Store>(this.config, `/stores/${storeId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Update store packing slip. */
  updatePackingSlip(data: PackingSlipPayload, storeIdOverride?: string | null) {
    return request<Store>(this.config, "/store/packing-slip", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
