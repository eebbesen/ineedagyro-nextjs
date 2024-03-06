import { type NextRequest, NextResponse } from "next/server";
import { callYelp } from "../../utils/getBusinesses";

// Returns DataJson type (businesses: BusinessJson[])
// for backwards compatibility reasons with existing consumers
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  const term = searchParams.get("term") || "gyro";

  const data: DataJson = await callYelp(lat, lng, term);

  return NextResponse.json(data);
}
