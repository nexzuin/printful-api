import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { TaxCountryInfo } from "../../types/v1/tax.js";

export class TaxResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** Get tax rates for all countries. */
  countries(storeIdOverride?: string | null) {
    return request<TaxCountryInfo[]>(this.config, "/tax/countries", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
