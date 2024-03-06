import { type NextRequest, NextResponse } from "next/server";
import { callYelp } from "../../utils/getBusinesses";
import { extractParams } from "../../utils/apiHelper";
import { logger } from "../../logger";

// Returns DataJson type (businesses: BusinessJson[])
// for backwards compatibility reasons with existing consumers
export async function GET(request: NextRequest) {
  const { lat, lng, term } = extractParams(request.nextUrl.searchParams);

  logger.info(
    `recs GET: called with lat: ${lat.toFixed()}, lng: ${lng.toFixed()}, term: ${term}`,
  );

  const data: DataJson = await callYelp(lat, lng, term);

  return NextResponse.json(data);
}
