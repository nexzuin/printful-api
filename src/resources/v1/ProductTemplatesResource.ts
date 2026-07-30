import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { PaginationParams } from "../../types/v1/common.js";
import type { ProductTemplate } from "../../types/v1/product-templates.js";

export class ProductTemplatesResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List product templates. */
  list(params?: PaginationParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<ProductTemplate[]>(this.config, `/product-templates${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get a single product template. */
  get(templateId: number, storeIdOverride?: string | null) {
    return request<ProductTemplate>(this.config, `/product-templates/${templateId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Delete a product template. */
  delete(templateId: number, storeIdOverride?: string | null) {
    return request<void>(this.config, `/product-templates/${templateId}`, {
      method: "DELETE",
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
