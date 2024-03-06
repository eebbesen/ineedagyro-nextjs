import { getBusinesses } from "../../../../src/app/utils/getBusinesses";
import * as testHelper from "../testHelper";
import { mockFetch, mockGeolocation } from "../testHelper";

describe("getBusinesses", () => {
  it("returns empty array when no results", async () => {
    window.fetch = mockFetch({ businesses: [] });

    const data = await getBusinesses(44.938128, -93.169022);

    expect(data).toEqual([]);
  });

  it("returns results", async () => {
    window.fetch = mockFetch(JSON.parse(testHelper.BUSINESSES_JSON));

    const data = await getBusinesses(44.938128, -93.169022);

    expect(data.length).toEqual(3);
    expect(data[0].alias).toEqual("shish-saint-paul");
  });

  it("throws error when fetch is not 200", async () => {
    window.fetch = mockFetch([], 400);

    await expect(getBusinesses(44.938128, -93.169022)).rejects.toThrow(
      "Yelp API call failed",
    );
  });
});
