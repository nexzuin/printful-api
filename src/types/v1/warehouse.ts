/** Warehouse product. */
export interface WarehouseProduct {
  id: number;
  name: string;
  type: string;
  image: string;
  variants: WarehouseProductVariant[];
}

export interface WarehouseProductVariant {
  id: number;
  product_id: number;
  name: string;
  sku: string;
  price: string;
  quantity: number;
}
