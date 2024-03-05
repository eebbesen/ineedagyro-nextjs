"use server";

export async function getBusinesses(
  lat: number,
  lng: number,
): Promise<BusinessJson[]> {
  return await callYelp(lat, lng);
}

async function callYelp(
  lat: number = 44.9379079,
  lng: number = -93.1710553,
  term: string = "gyro",
): Promise<BusinessJson[]> {
  if (lat === 0 || lng === 0) {
    return Promise.resolve([] as BusinessJson[]);
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  };

  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lng}&term=${term}&sort_by=distance&limit=20`,
    options,
  );

  const data = await response.json();
  return data.businesses;
  // todo: error handling
  // todo: what if there are no businesses found for location/term?
}
