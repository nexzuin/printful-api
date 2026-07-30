/** Product template (draft order / quote). */
export interface ProductTemplate {
  id: number;
  name: string;
  thumbnail_url: string | null;
  created: number;
  updated: number;
}
