import Location from "../../../src/app/location";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as testHelper from "./testHelper";

describe("Location", () => {
  it("renders location", () => {
    const loc = JSON.parse(testHelper.BUSINESS_JSON) as BusinessJson;
    render(<Location {...loc} />);

    expect(screen.getByText("St Paul Meat Shop")).toBeInTheDocument();
    expect(screen.getByText("1674 Grand Ave")).toBeInTheDocument();
    expect(screen.getByText("246.57 meters")).toBeInTheDocument();
  });
});
