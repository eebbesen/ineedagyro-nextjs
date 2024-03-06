/**
 * @jest-environment node
 */

import { NextRequest } from "next/server";
import { GET } from "../../../../../src/app/api/locations/route";
import * as testHelper from "../../testHelper";

describe("GET", () => {
  it("returns expected response", async () => {
    global.fetch = testHelper.mockFetch(JSON.parse(testHelper.BUSINESSES_JSON));
    const req = new NextRequest(
      "http://localhost:3000/api/locations?lat=20.01&lng=30.02&term=donerkebab",
    );
    const response = await GET(req);
    const json = await response.json();

    expect(response.status).toEqual(200);
    expect(response.headers.get("content-type")).toEqual("application/json");
    expect(json[0].alias).toEqual("shish-saint-paul");
  });
});
