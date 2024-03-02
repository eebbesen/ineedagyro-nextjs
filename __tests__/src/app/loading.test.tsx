import Loading from "../../../src/app/loading";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Loading", () => {
  it("should render gyro", () => {
    render(<Loading />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
