import { PrintfulConfig } from "./config.js";

/** Response envelope from Printful API. */
export interface PrintfulResponse<T> {
  code: number;
  result: T;
  extra?: Record<string, unknown>;
}

/** Request options. */
interface RequestOpts {
  method?: string;
  body?: unknown;
  headers?: Record<string, string>;
  /** Override store ID for this request. */
  storeId?: string | null;
}

/** Typed API error. */
export class PrintfulApiError extends Error {
  constructor(
    public status: number,
    public code: number,
    body: string
  ) {
    super(`Printful API ${status}: ${body}`);
    this.name = "PrintfulApiError";
  }
}

/** Default base URL. */
const DEFAULT_BASE = "https://api.printful.com";

/**
 * Low-level request function.
 * Attaches auth, store ID header, serialises JSON body,
 * and returns parsed `PrintfulResponse<T>`.
 */
export async function request<T>(
  config: PrintfulConfig,
  path: string,
  opts: RequestOpts = {}
): Promise<PrintfulResponse<T>> {
  const baseUrl = config.baseUrl ?? DEFAULT_BASE;
  const method = opts.method ?? "GET";

  const headers: Record<string, string> = {
    Authorization: `Bearer ${config.token}`,
    Accept: "application/json",
    ...(opts.headers ?? {}),
  };

  // X-PF-Store-ID: use override, then config default, skip if explicit null
  const storeId = opts.storeId !== undefined ? opts.storeId : config.storeId;
  if (storeId) {
    headers["X-PF-Store-ID"] = storeId;
  }

  const init: RequestInit = { method, headers };

  if (opts.body !== undefined && opts.body !== null) {
    headers["Content-Type"] = "application/json";
    init.body = JSON.stringify(opts.body);
  }

  const res = await fetch(`${baseUrl}${path}`, init);

  if (!res.ok) {
    const text = await res.text();
    throw new PrintfulApiError(res.status, res.status, text);
  }

  // Handle 204 No Content
  if (res.status === 204) {
    return { code: 204, result: undefined as T };
  }

  return res.json() as Promise<PrintfulResponse<T>>;
}
