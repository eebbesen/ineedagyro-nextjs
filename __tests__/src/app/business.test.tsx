import Business from "../../../src/app/business";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as testHelper from "./testHelper";

describe("Business", () => {
  it("renders business using miles", () => {
    const business = JSON.parse(testHelper.BUSINESS_JSON) as BusinessJson;
    render(<Business locJson={business} distanceType="miles" />);

    expect(screen.getByText("St Paul Meat Shop")).toBeInTheDocument();
    expect(screen.getByText("1674 Grand Ave")).toBeInTheDocument();
    expect(screen.getByText("0.15 miles")).toBeInTheDocument();
  });

  it("renders business using miles", () => {
    const business = JSON.parse(testHelper.BUSINESS_JSON) as BusinessJson;
    render(<Business locJson={business} distanceType="kms" />);

    expect(screen.getByText("St Paul Meat Shop")).toBeInTheDocument();
    expect(screen.getByText("1674 Grand Ave")).toBeInTheDocument();
    expect(screen.getByText("0.25 kms")).toBeInTheDocument();
  });
});
