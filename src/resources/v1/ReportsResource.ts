import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { StatisticsReport } from "../../types/v1/reports.js";

export interface StatisticsParams {
  date_from?: string;
  date_to?: string;
  report_types?: string;
  currency?: string;
}

export class ReportsResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** Get statistics report. */
  statistics(params?: StatisticsParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<StatisticsReport>(this.config, `/reports/statistics${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
