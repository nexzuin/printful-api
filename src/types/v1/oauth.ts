/** Scopes returned by GET /oauth/scopes */
export interface OAuthScope {
  /** Scope key, e.g. "products", "orders" */
  scope: string;
  /** Whether the token has this scope. */
  permitted: boolean;
  /** Optional reason if not permitted. */
  reason?: string;
}
