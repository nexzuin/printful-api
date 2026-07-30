/** V2 Mockup task payload. */
export interface CreateMockupTaskPayloadV2 {
  catalog_product_id: number;
  catalog_variant_ids: number[];
  format: string;
  files: {
    placement: string;
    image_url: string;
    technique?: string;
  }[];
}

/** V2 Mockup task. */
export interface MockupTaskV2 {
  id: string;
  catalog_product_id: number;
  status: string;
  created_at: string;
  mockups?: MockupResultV2[];
}

export interface MockupResultV2 {
  placement: string;
  variant_id: number;
  mockup_url: string;
}
