import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type {
  MockupTemplate,
  MockupTask,
  CreateMockupTaskPayload,
} from "../../types/v1/mockup-generator.js";

export class MockupGeneratorResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** Get mockup templates for a product. */
  templates(productId: number, params?: { orientation?: string; technique?: string }, storeIdOverride?: string | null) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<MockupTemplate[]>(this.config, `/mockup-generator/templates/${productId}${qs}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Get mockup task status. */
  task(taskKey: string, storeIdOverride?: string | null) {
    return request<MockupTask>(this.config, `/mockup-generator/task?task_key=${taskKey}`, {
      storeId: storeIdOverride ?? this.storeId,
    });
  }

  /** Create a mockup generation task. */
  createTask(productId: number, data: CreateMockupTaskPayload, storeIdOverride?: string | null) {
    return request<{ task_key: string }>(this.config, `/mockup-generator/create-task/${productId}`, {
      method: "POST",
      body: data,
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
