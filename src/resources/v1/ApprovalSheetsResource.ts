import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { ApprovalSheet, CreateApprovalSheetPayload } from "../../types/v1/approval-sheets.js";

export class ApprovalSheetsResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** List approval sheets. */
  list(storeIdOverride?: string | null) {
    return request<ApprovalSheet[]>(this.config, "/approval-sheets", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Create an approval sheet. */
  create(data: CreateApprovalSheetPayload, confirmHash?: string, storeIdOverride?: string | null) {
    const qs = confirmHash ? `?confirm_hash=${confirmHash}` : "";
    return request<ApprovalSheet>(this.config, `/approval-sheets${qs}`, {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Submit approval sheet changes. */
  submitChanges(confirmHash: string, storeIdOverride?: string | null) {
    return request<ApprovalSheet>(this.config, `/approval-sheets/changes?confirm_hash=${confirmHash}`, {
      method: "POST",
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
