/** Approval sheet. */
export interface ApprovalSheet {
  id: number;
  name: string;
  status: string;
  created: number;
  updated: number;
  items: ApprovalSheetItem[];
}

export interface ApprovalSheetItem {
  id: number;
  sync_product_id: number;
  name: string;
  thumbnail_url: string;
  status: string;
}

/** Payload for POST /approval-sheets */
export interface CreateApprovalSheetPayload {
  recipient_email: string;
  sync_product_ids: number[];
  message?: string;
}
