/** Printful API client configuration. */
export interface PrintfulConfig {
  /** Bearer token for API authentication. */
  token: string;

  /** Default store ID (X-PF-Store-ID header). Overridable per-method. */
  storeId?: string;

  /** API base URL. Defaults to https://api.printful.com */
  baseUrl?: string;
}
