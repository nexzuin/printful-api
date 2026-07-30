import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { PaginationParams } from "../../types/v2/common.js";
import type {
  CatalogProductV2,
  CatalogVariantV2,
  CatalogCategoryV2,
  ProductSizeV2,
  PriceInfoV2,
  ProductImageV2,
  ShippingCountryV2,
  MockupStyleV2,
  MockupTemplateV2,
  AvailabilityV2,
} from "../../types/v2/catalog.js";

export interface ListCatalogProductsParams extends PaginationParams {
  category_ids?: string;
  colors?: string;
  new?: boolean;
  placements?: string;
  selling_region_name?: string;
  sort_direction?: string;
  sort_type?: string;
  techniques?: string;
}

export interface PricesParams {
  selling_region_name?: string;
  currency?: string;
}

export interface MockupStylesParams {
  placements?: string;
  selling_region_name?: string;
  offset?: number;
  limit?: number;
}

export interface AvailabilityParams {
  techniques?: string;
  selling_region_name?: string;
  limit?: number;
  offset?: number;
}

export class CatalogV2Resource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List catalog products. */
  listProducts(params?: ListCatalogProductsParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<CatalogProductV2[]>(this.config, `/v2/catalog-products${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get a catalog product. */
  getProduct(productId: number, params?: { selling_region_name?: string }, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<CatalogProductV2>(this.config, `/v2/catalog-products/${productId}${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get a catalog variant. */
  getVariant(variantId: number, storeIdOverride?: string | null) {
    return request<CatalogVariantV2>(this.config, `/v2/catalog-variants/${variantId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** List variants for a product. */
  listVariants(productId: number, storeIdOverride?: string | null) {
    return request<CatalogVariantV2[]>(this.config, `/v2/catalog-products/${productId}/catalog-variants`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** List catalog categories. */
  listCategories(storeIdOverride?: string | null) {
    return request<CatalogCategoryV2[]>(this.config, "/v2/catalog-categories", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get a catalog category. */
  getCategory(categoryId: number, storeIdOverride?: string | null) {
    return request<CatalogCategoryV2>(this.config, `/v2/catalog-categories/${categoryId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** List categories for a product. */
  listProductCategories(productId: number, storeIdOverride?: string | null) {
    return request<CatalogCategoryV2[]>(this.config, `/v2/catalog-products/${productId}/catalog-categories`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get size guide for a product. */
  sizes(productId: number, params?: { unit?: string }, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<ProductSizeV2[]>(this.config, `/v2/catalog-products/${productId}/sizes${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get prices for a product. */
  productPrices(productId: number, params?: PricesParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<PriceInfoV2[]>(this.config, `/v2/catalog-products/${productId}/prices${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get prices for a variant. */
  variantPrices(variantId: number, params?: PricesParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<PriceInfoV2[]>(this.config, `/v2/catalog-variants/${variantId}/prices${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get images for a product. */
  productImages(productId: number, storeIdOverride?: string | null) {
    return request<ProductImageV2[]>(this.config, `/v2/catalog-products/${productId}/images`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get shipping countries for a product. */
  shippingCountries(productId: number, storeIdOverride?: string | null) {
    return request<ShippingCountryV2[]>(this.config, `/v2/catalog-products/${productId}/shipping-countries`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get images for a variant. */
  variantImages(variantId: number, params?: { mockup_style_ids?: string; placement?: string }, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<ProductImageV2[]>(this.config, `/v2/catalog-variants/${variantId}/images${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get mockup styles for a product. */
  mockupStyles(productId: number, params?: MockupStylesParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<MockupStyleV2[]>(this.config, `/v2/catalog-products/${productId}/mockup-styles${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get mockup templates for a product. */
  mockupTemplates(productId: number, params?: { placements?: string; selling_region_name?: string; limit?: number; offset?: number }, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<MockupTemplateV2[]>(this.config, `/v2/catalog-products/${productId}/mockup-templates${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get availability for a product. */
  productAvailability(productId: number, params?: AvailabilityParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<AvailabilityV2[]>(this.config, `/v2/catalog-products/${productId}/availability${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get availability for a variant. */
  variantAvailability(variantId: number, params?: { techniques?: string; selling_region_name?: string }, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<AvailabilityV2[]>(this.config, `/v2/catalog-variants/${variantId}/availability${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
