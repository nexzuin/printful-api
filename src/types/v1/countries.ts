/** Country with states. */
export interface Country {
  code: string;
  name: string;
  states?: State[];
}

/** State/region within a country. */
export interface State {
  code: string;
  name: string;
}
