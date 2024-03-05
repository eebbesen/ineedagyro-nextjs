import Results from "../../../src/app/results";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as testHelper from "./testHelper";

describe("Results", () => {
  it("should render loading when no businesses (still loading)", () => {
    render(<Results businesses={[]} isLoaded={false} />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should render No Businesses Found when no businesses (done loading)", () => {
    render(<Results businesses={[]} isLoaded={true} />);

    expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    expect(screen.getByText("No Businesses Found")).toBeInTheDocument();
  });

  it("should render businesses when locations", () => {
    render(
      <Results
        businesses={JSON.parse(testHelper.BUSINESSES_JSON).businesses}
        isLoaded={true}
      />,
    );

    expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    expect(screen.getByText("Shish")).toBeInTheDocument();
  });
});
