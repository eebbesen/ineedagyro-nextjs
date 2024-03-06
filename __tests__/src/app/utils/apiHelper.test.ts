import { NextURL } from "next/dist/server/web/next-url";
import { extractParams } from "../../../../src/app/utils/apiHelper";

describe("apiHelper", () => {
  it("should extract and cast passed-in parameters", () => {
    const nextUrl = new NextURL(
      "https://localhost:3000?lat=44.9379079&lng=-93.1710553&term=shwarma",
    );
    const extractedParams = extractParams(nextUrl.searchParams);

    expect(extractedParams.lat).toBe(44.9379079);
    expect(extractedParams.lng).toBe(-93.1710553);
    expect(extractedParams.term).toBe("shwarma");
  });

  it("should default term if not passed in", () => {
    const nextUrl = new NextURL(
      "https://localhost:3000?lat=44.9379079&lng=-93.1710553",
    );
    const extractedParams = extractParams(nextUrl.searchParams);

    expect(extractedParams.lat).toBe(44.9379079);
    expect(extractedParams.lng).toBe(-93.1710553);
    expect(extractedParams.term).toBe("gyro");
  });

  it("should throw error when missing lat", () => {
    const nextUrl = new NextURL("https://localhost:3000?lng=-93.1710553");
    expect(() => extractParams(nextUrl.searchParams)).toThrow(
      "numeric lat required",
    );
  });

  it("should throw error when missing lat", () => {
    const nextUrl = new NextURL("https://localhost:3000?lat=44.9379079");
    expect(() => extractParams(nextUrl.searchParams)).toThrow(
      "numeric lng required",
    );
  });
});
