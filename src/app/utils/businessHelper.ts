export function displayAddress(distance: number, location: LocationJson) {
  let address = location.address1;

  if (distance > 16_000) address += `, ${location.city}`;

  return address;
}
