import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { CountryV2 } from "../../types/v2/countries.js";

export class CountriesV2Resource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List all countries and states (V2). */
  list(storeIdOverride?: string | null) {
    return request<CountryV2[]>(this.config, "/v2/countries", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
