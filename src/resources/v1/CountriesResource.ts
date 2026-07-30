import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { Country } from "../../types/v1/countries.js";

export class CountriesResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List all countries and states. */
  list(storeIdOverride?: string | null) {
    return request<Country[]>(this.config, "/countries", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
