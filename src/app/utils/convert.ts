const METERS_TO_MILES = 0.000621371;

export function toMiles(meters: number): number {
  return +(meters * METERS_TO_MILES).toFixed(2);
}

export function toKms(meters: number): number {
  return +(meters / 1000).toFixed(2);
}
