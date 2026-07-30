/** V2 Catalog product. */
export interface CatalogProductV2 {
  id: number;
  name: string;
  description: string;
  techniques: string[];
  placements: string[];
  images: CatalogProductImageV2[];
  catalog_category_id: number | null;
  catalog_category_name: string | null;
  selling_region_names: string[];
}

export interface CatalogProductImageV2 {
  id: number;
  url: string;
  description: string | null;
  position: string;
  is_main: boolean;
  technique: string | null;
}

/** V2 Catalog variant. */
export interface CatalogVariantV2 {
  id: number;
  catalog_product_id: number;
  name: string;
  size: string | null;
  color: string | null;
  color_code: string | null;
  image: string | null;
}

/** V2 Catalog category. */
export interface CatalogCategoryV2 {
  id: number;
  parent_id: number | null;
  title: string;
  image_url: string | null;
  product_count: number;
}

/** Product size guide (V2). */
export interface ProductSizeV2 {
  type: string;
  label: string;
  measurements: Record<string, string>;
}

/** Price info. */
export interface PriceInfoV2 {
  currency: string;
  retail_price: string;
  wholesale_price: string;
}

/** Product image V2. */
export interface ProductImageV2 {
  id: number;
  url: string;
  description: string | null;
  position: string;
  is_main: boolean;
  technique: string | null;
}

/** Shipping country for a product. */
export interface ShippingCountryV2 {
  country_code: string;
  country_name: string;
}

/** Mockup style. */
export interface MockupStyleV2 {
  id: number;
  name: string;
  image_url: string;
  placement: string;
  technique: string;
}

/** Mockup template. */
export interface MockupTemplateV2 {
  id: number;
  placement: string;
  technique: string;
  image_url: string;
  variant_ids: number[];
}

/** Availability info. */
export interface AvailabilityV2 {
  variant_id: number;
  technique: string;
  selling_region_name: string;
  is_available: boolean;
  fulfillment_estimated_days: number;
}
