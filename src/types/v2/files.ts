/** V2 File. */
export interface FileV2 {
  id: string;
  filename: string;
  type: string;
  mime_type: string;
  url: string;
  thumbnail_url: string | null;
  preview_url: string | null;
  width: number;
  height: number;
  visible: boolean;
  created_at: string;
}

/** Payload for POST /v2/files. */
export interface UploadFilePayloadV2 {
  url?: string;
  filename?: string;
  type?: string;
  mime_type?: string;
  visible?: boolean;
}
