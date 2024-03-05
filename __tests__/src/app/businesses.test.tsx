import Businesses from "../../../src/app/businesses";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as testHelper from "./testHelper";

describe("Businesses", () => {
  it("renders businesses", () => {
    render(
      <Businesses
        businesses={JSON.parse(testHelper.BUSINESSES_JSON).businesses}
      />,
    );

    expect(screen.getByText("Shish")).toBeInTheDocument();
    expect(screen.getByText("1668 Grand Ave")).toBeInTheDocument();
    expect(screen.getByText("St Paul Meat Shop")).toBeInTheDocument();
    expect(screen.getByText("1674 Grand Ave")).toBeInTheDocument();
  });
});
