import Navbar from "../../../src/app/navbar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Navbar", () => {
  it("renders navbar when distance type miles", () => {
    render(<Navbar distanceType="miles" setDistanceType={() => {}} />);

    expect(screen.getByText("View in kms")).toBeInTheDocument();
  });

  it("renders navbar when distance type kms", () => {
    render(<Navbar distanceType="kms" setDistanceType={() => {}} />);

    expect(screen.getByText("View in miles")).toBeInTheDocument();
  });

  it("toggles distance type when clicked", () => {
    const setDistanceType = jest.fn();
    render(<Navbar distanceType="miles" setDistanceType={setDistanceType} />);

    act(() => {
      screen.getByText("View in kms").click();
    });

    expect(setDistanceType).toHaveBeenCalledWith("kms");
  });
});
