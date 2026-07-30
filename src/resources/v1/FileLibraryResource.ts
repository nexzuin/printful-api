import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { FileItem, UploadFilePayload, ThreadColor } from "../../types/v1/file-library.js";

export class FileLibraryResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** Upload a file (by URL or directly). */
  upload(data: UploadFilePayload, storeIdOverride?: string | null) {
    return request<FileItem>(this.config, "/files", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get file info by ID. */
  get(fileId: number, storeIdOverride?: string | null) {
    return request<FileItem>(this.config, `/files/${fileId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get thread colors for DTG embroidery. */
  threadColors(storeIdOverride?: string | null) {
    return request<ThreadColor[]>(this.config, "/files/thread-colors", {
      method: "POST",
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
