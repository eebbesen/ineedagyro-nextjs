import Results from "../../../src/app/results";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as testHelper from "./testHelper";

describe("Results", () => {
  it("should render loading when no businesses", () => {
    render(<Results businesses={[]} />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should render businesses when locations", () => {
    render(
      <Results
        businesses={JSON.parse(testHelper.BUSINESSES_JSON).businesses}
      />,
    );

    expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    expect(screen.getByText("Shish")).toBeInTheDocument();
  });
});
