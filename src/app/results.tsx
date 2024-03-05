import React from "react";
import Loading from "./loading";
import Businesses from "./businesses";

export default function Results({
  businesses,
  isLoaded,
}: {
  readonly businesses: BusinessJson[];
  readonly isLoaded: boolean;
}) {
  if (!isLoaded) {
    return (
      <div id="results" data-testid="results">
        <Loading />
      </div>
    );
  }

  return (
    <div id="results" data-testid="results" className="my-4 mx-16">
      <Businesses businesses={businesses} />
    </div>
  );
}
