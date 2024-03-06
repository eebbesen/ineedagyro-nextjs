import { displayAddress } from "../../../../src/app/utils/businessHelper";

describe("displayAddress", () => {
  const location = {
    address1: "1600 Grand Ave",
    city: "Saint Paul",
  } as LocationJson;

  it("displays only street address when close", () => {
    expect(displayAddress(16_000, location)).toBe("1600 Grand Ave");
  });

  it("displays street and ity when further", () => {
    expect(displayAddress(16_001, location)).toBe("1600 Grand Ave, Saint Paul");
  });
});
