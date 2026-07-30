/** File from V1 file library. */
export interface FileItem {
  id: number;
  filename: string;
  type: string;
  mime_type: string;
  url: string;
  thumbnail_url?: string;
  preview_url?: string;
  visible: boolean;
  width: number;
  height: number;
  options?: Record<string, unknown>;
}

/** Payload for POST /files. */
export interface UploadFilePayload {
  url?: string;
  filename?: string;
  type?: string;
  mime_type?: string;
  visible?: boolean;
  options?: Record<string, unknown>;
}

/** Thread color. */
export interface ThreadColor {
  id: number;
  name: string;
  code: string;
  hex: string;
}
