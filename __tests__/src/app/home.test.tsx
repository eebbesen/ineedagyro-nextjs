import Home from "../../../src/app/page";
import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';
import { render, screen } from "@testing-library/react";
import { mockFetch, mockGeolocation } from "./testHelper";

describe("Home", () => {
  it("should render loading when no lat/long", () => {
    window.fetch = mockFetch([]);
    mockGeolocation(0.0, 0.0);

    act(() => {
      render(<Home />);
    });

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  // it("should render locations when lat/long and data", () => {
  //   window.fetch = mockFetch(MOCK_JSON);
  //   mockGeolocation(44.938128, -93.169022);

  //   act(() => {
  //     render(<Home />);
  //   });

  //   expect(screen.getByTestId("loading")).not.toBeInTheDocument();
  //   expect(screen.getByText("Shish")).toBeInTheDocument();
  // });
});
