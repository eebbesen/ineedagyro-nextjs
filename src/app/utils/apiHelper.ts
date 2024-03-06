export function extractParams(params: URLSearchParams): APISearchParams {
  if (!params.has("lat") && !isNaN(Number(params.get("lat")))) {
    throw new Error("numeric lat required");
  }

  if (!params.has("lng") && !isNaN(Number(params.get("lng")))) {
    throw new Error("numeric lng required");
  }

  return {
    lat: Number(params.get("lat")),
    lng: Number(params.get("lng")),
    term: params.get("term") || "gyro",
  };
}
