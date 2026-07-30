import type { PrintfulConfig } from "../../config.js";
import { request } from "../../request.js";
import type { PrintfulResponse } from "../../request.js";
import type { OAuthScopeV2 } from "../../types/v2/oauth.js";

export class OAuthV2Resource {
  constructor(
    private config: PrintfulConfig,
    private storeId?: string,
  ) {}

  /** Get V2 scopes for the current token. */
  scopes(storeIdOverride?: string | null) {
    return request<OAuthScopeV2[]>(this.config, "/v2/oauth-scopes", {
      storeId: storeIdOverride ?? this.storeId,
    });
  }
}
