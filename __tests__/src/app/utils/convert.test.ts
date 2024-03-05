import { toMiles, toKms } from "../../../../src/app/utils/convert";

describe("convert", () => {
  it("converts meters to miles", () => {
    const miles = toMiles(1609.34);
    expect(miles).toEqual(1);
  });

  it("converts meters to miles", () => {
    const miles = toKms(1000.0);
    expect(miles).toEqual(1);
  });
});
