import Home from "../../../src/app/page";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import { mockFetch, mockGeolocation } from "./testHelper";

describe("Home", () => {
  it("should render loading when no lat/long", async () => {
    window.fetch = mockFetch([]);
    mockGeolocation(0.0, 0.0);

    await act(() => {
      render(<Home />);
    });

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  })
})
