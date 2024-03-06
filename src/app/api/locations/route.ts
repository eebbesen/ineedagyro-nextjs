import { type NextRequest, NextResponse } from "next/server";
import { callYelp } from "../../utils/getBusinesses";
import { extractParams } from "../../utils/apiHelper";
import { logger } from "../../logger";

// Returns BusinessJson[]
export async function GET(request: NextRequest) {
  const { lat, lng, term } = extractParams(request.nextUrl.searchParams);

  logger.info(
    `locations GET: called with lat: ${lat.toFixed()}, lng: ${lng.toFixed()}, term: ${term}`,
  );

  const data: DataJson = await callYelp(lat, lng, term);
  const businesses: BusinessJson[] = data.businesses;

  return NextResponse.json(businesses);
}
