import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { OAuthScope } from "../../types/v1/oauth.js";

export class OAuthResource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** Get scopes for the current token. */
  scopes(storeIdOverride?: string | null) {
    return request<OAuthScope[]>(this.config, "/oauth/scopes", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
