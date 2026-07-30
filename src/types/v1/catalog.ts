/** Sync product from V1 catalog. */
export interface SyncProduct {
  id: number;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
}

/** Sync product detail. */
export interface SyncProductDetail extends SyncProduct {
  description?: string;
  price?: string;
  external_variants?: SyncVariant[];
}

/** Sync variant from V1 catalog. */
export interface SyncVariant {
  id: number;
  external_id: string;
  sync_product_id: number;
  name: string;
  synced: boolean;
  variant_id: number;
  warehouse_product_variant_id: number | null;
  retail_price: string;
  sku: string;
  currency: string;
  product: {
    variant_id: number;
    product_id: number;
    image: string;
    name: string;
  };
  files: SyncFile[];
  options: Record<string, string>;
  is_ignored: boolean;
  availability_status: string;
  catalog_variant_id: number;
  catalog_product_id: number;
}

/** File in a sync variant. */
export interface SyncFile {
  id: number;
  type: string;
  url: string;
  options?: Record<string, unknown>;
  filename: string;
  mime_type: string;
  thumbnail_url?: string;
  preview_url?: string;
  visible: boolean;
  position: string;
}

/** Product variant info (from /products/variant/:id). */
export interface ProductVariantInfo {
  variant_id: number;
  product_id: number;
  image: string;
  name: string;
}

/** Product size guide. */
export interface ProductSizeGuide {
  product_id: number;
  sizes: ProductSize[];
  units: string;
}

export interface ProductSize {
  type: string;
  label: string;
  measurements: Record<string, string>;
}

/** Product category. */
export interface Category {
  id: number;
  parent_id: number | null;
  image_url: string | null;
  title: string;
  product_count: number;
}
