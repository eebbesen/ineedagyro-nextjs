import Results from "../../../src/app/results";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as testHelper  from "./testHelper";

describe("Results", () => {
  it("should render loading when no locations", () => {
    render(<Results locations={[]} />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should render locations when locations", () => {
    render(<Results locations={JSON.parse(testHelper.BUSINESS_JSON).businesses} />);

    expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    expect(screen.getByText("Shish")).toBeInTheDocument();
  });
});
