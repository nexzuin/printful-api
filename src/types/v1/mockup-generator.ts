/** Mockup template for a product. */
export interface MockupTemplate {
  product_id: number;
  variant_ids: number[];
  orientations: MockupOrientation[];
}

export interface MockupOrientation {
  name: string;
  techniques: string[];
  positions: MockupPosition[];
}

export interface MockupPosition {
  placement: string;
  technique: string;
  printable_area: {
    width: number;
    height: number;
    left: number;
    top: number;
  };
}

/** Mockup generation task. */
export interface MockupTask {
  task_key: string;
  status: string;
  mockups?: MockupResult[];
}

export interface MockupResult {
  placement: string;
  variant_ids: number[];
  mockup_url: string;
  extra_urls?: Record<string, string>;
}

/** Payload for POST /mockup-generator/create-task/:product_id */
export interface CreateMockupTaskPayload {
  variant_ids: number[];
  format: string;
  files: {
    placement: string;
    image_url: string;
    technique?: string;
    position?: {
      width?: number;
      height?: number;
      left?: number;
      top?: number;
    };
  }[];
}
