import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { FileV2, UploadFilePayloadV2 } from "../../types/v2/files.js";

export class FilesV2Resource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** Upload a file. */
  upload(data: UploadFilePayloadV2, storeIdOverride?: string | null) {
    return request<FileV2>(this.config, "/v2/files", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get file by ID. */
  get(fileId: string, storeIdOverride?: string | null) {
    return request<FileV2>(this.config, `/v2/files/${fileId}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
