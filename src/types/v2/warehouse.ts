/** V2 Warehouse product. */
export interface WarehouseProductV2 {
  id: string;
  name: string;
  image: string | null;
  sku: string;
  quantity: number;
  price: string;
}
