import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { PaginationParams } from "../../types/v1/common.js";
import type {
  SyncProduct,
  SyncProductDetail,
  ProductVariantInfo,
  ProductSizeGuide,
  Category,
} from "../../types/v1/catalog.js";

export class CatalogResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List all sync products. */
  list(params?: PaginationParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<SyncProduct[]>(this.config, `/products${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get variant info. */
  variant(variantId: number, storeIdOverride?: string | null) {
    return request<ProductVariantInfo>(this.config, `/products/variant/${variantId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get sync product detail. */
  get(productId: number, storeIdOverride?: string | null) {
    return request<SyncProductDetail>(this.config, `/products/${productId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get product size guide. */
  sizes(productId: number, storeIdOverride?: string | null) {
    return request<ProductSizeGuide>(this.config, `/products/${productId}/sizes`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** List all categories. */
  categories(storeIdOverride?: string | null) {
    return request<Category[]>(this.config, "/categories", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get a single category. */
  category(categoryId: number, storeIdOverride?: string | null) {
    return request<Category>(this.config, `/categories/${categoryId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
