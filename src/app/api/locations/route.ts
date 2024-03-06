import { type NextRequest, NextResponse } from "next/server";
import { callYelp } from "../../utils/getBusinesses";
import { logger } from "../../logger";

// Returns BusinessJson[]
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  const term = searchParams.get("term") || "gyro";

  logger.info(
    `locations GET: called with lat: ${lat.toFixed()}, lng: ${lng.toFixed()}, term: ${term}`,
  );
  console.log(process.env);

  const data: DataJson = await callYelp(lat, lng, term);
  const businesses: BusinessJson[] = data.businesses;

  return NextResponse.json(businesses);
}
