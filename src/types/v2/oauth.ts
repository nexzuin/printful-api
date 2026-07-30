/** V2 OAuth scopes. */
export interface OAuthScopeV2 {
  scope: string;
  display_name: string;
  permitted: boolean;
  reason?: string;
}
