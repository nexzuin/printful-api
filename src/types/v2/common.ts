import type { PrintfulResponse } from "../../request.js";

export type { PrintfulResponse };

/** Pagination parameters used in V2 list endpoints. */
export interface PaginationParams {
  limit?: number;
  offset?: number;
}
