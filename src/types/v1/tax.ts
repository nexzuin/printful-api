/** Tax info for a country. */
export interface TaxCountryInfo {
  country_code: string;
  country_name: string;
  tax_rate: number;
  tax_type: string;
  states?: TaxStateInfo[];
}

export interface TaxStateInfo {
  state_code: string;
  state_name: string;
  tax_rate: number;
  tax_type: string;
}
