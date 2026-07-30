/** Statistics report. */
export interface StatisticsReport {
  date_from: string;
  date_to: string;
  report_types: string;
  currency: string;
  reports: Record<string, unknown>;
}
