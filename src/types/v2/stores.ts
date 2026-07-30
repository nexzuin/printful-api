/** V2 Store. */
export interface StoreV2 {
  id: number;
  name: string;
  type: string;
  platform: string | null;
  currency: string;
  created_at: string;
}

/** V2 Store statistics. */
export interface StoreStatisticsV2 {
  orders_count: number;
  total_revenue: string;
  currency: string;
}
