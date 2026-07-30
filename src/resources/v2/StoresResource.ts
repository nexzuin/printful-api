import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { StoreV2, StoreStatisticsV2 } from "../../types/v2/stores.js";

export interface StoreStatisticsParams {
  date_from?: string;
  date_to?: string;
  currency?: string;
  report_types?: string;
}

export class StoresV2Resource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List stores. */
  list(storeIdOverride?: string | null) {
    return request<StoreV2[]>(this.config, "/v2/stores", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get store by ID. */
  get(storeId: number, storeIdOverride?: string | null) {
    return request<StoreV2>(this.config, `/v2/stores/${storeId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get store statistics. */
  statistics(storeId: number, params?: StoreStatisticsParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<StoreStatisticsV2>(this.config, `/v2/stores/${storeId}/statistics${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
