import Home from "../../../src/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should render loading", () => {
    render(<Home />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
