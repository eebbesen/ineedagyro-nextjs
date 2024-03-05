import Business from "../../../src/app/business";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as testHelper from "./testHelper";

describe("Business", () => {
  it("renders business", () => {
    const business = JSON.parse(testHelper.BUSINESS_JSON) as BusinessJson;
    render(<Business {...business} />);

    expect(screen.getByText("St Paul Meat Shop")).toBeInTheDocument();
    expect(screen.getByText("1674 Grand Ave")).toBeInTheDocument();
    expect(screen.getByText("0.15 miles")).toBeInTheDocument();
  });
});
