/** V2 Country. */
export interface CountryV2 {
  code: string;
  name: string;
  states?: {
    code: string;
    name: string;
  }[];
}
