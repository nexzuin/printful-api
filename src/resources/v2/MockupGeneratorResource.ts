import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { CreateMockupTaskPayloadV2, MockupTaskV2 } from "../../types/v2/mockup-generator.js";

export interface MockupTasksParams {
  id?: string;
  offset?: number;
  limit?: number;
}

export class MockupGeneratorV2Resource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** Create a mockup generation task. */
  createTask(data: CreateMockupTaskPayloadV2, storeIdOverride?: string | null) {
    return request<MockupTaskV2>(this.config, "/v2/mockup-tasks", {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** List/get mockup tasks. */
  tasks(params?: MockupTasksParams, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<MockupTaskV2[]>(this.config, `/v2/mockup-tasks${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
