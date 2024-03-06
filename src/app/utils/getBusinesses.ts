"use server";

import { logger } from "../logger";

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
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
  };

  logger.info(
    `getBusiness: calling Yelp with lat: ${lat.toFixed()}, lng: ${lng.toFixed()}`,
  );
  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lng}&term=${term}&sort_by=distance&limit=20`,
    options,
  );

  if (response.status !== 200) {
    logger.error(
      `getBusiness: Yelp API call failed with status: ${response.status}`,
    );
    throw new Error("Yelp API call failed");
  }

  const data = await response.json();
  return data.businesses;
}
