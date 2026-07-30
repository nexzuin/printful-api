import type { PrintfulResponse } from "../../request.js";

export type { PrintfulResponse };

/** Pagination parameters used in V1 list endpoints. */
export interface PaginationParams {
  limit?: number;
  offset?: number;
}

/** Generic address type. */
export interface Address {
  first_name: string;
  last_name: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state_code: string;
  country_code: string;
  zip: string;
  phone?: string;
  email?: string;
}
