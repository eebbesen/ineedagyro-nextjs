import Home from "../../../src/app/page";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import * as testHelper from "./testHelper";

describe("Home", () => {
  it("should render loading when lat is zero", async () => {
    window.fetch = testHelper.mockFetch([]);
    testHelper.mockGeolocation(0.0, -93.169022);

    await act(() => {
      render(<Home />);
    });

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should render loading when lng is zero", async () => {
    window.fetch = testHelper.mockFetch([]);
    testHelper.mockGeolocation(44.938128, 0.0);

    await act(() => {
      render(<Home />);
    });

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should render data when lat/long", async () => {
    window.fetch = testHelper.mockFetch(JSON.parse(testHelper.BUSINESSES_JSON));
    testHelper.mockGeolocation(44.938128, -93.169022);

    await act(() => {
      render(<Home />);
    });

    expect(screen.getByText("Shish")).toBeInTheDocument();
  });
});
