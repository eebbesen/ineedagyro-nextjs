import React from "react";
import Loading from "./loading";
import Businesses from "./businesses";

export default function Results({
  businesses,
  isLoaded,
  distanceType,
}: {
  readonly businesses: BusinessJson[];
  readonly isLoaded: boolean;
  readonly distanceType: Distance;
}) {
  if (!isLoaded) {
    return (
      <div id="results" data-testid="results">
        <Loading />
      </div>
    );
  }

  return (
    <div id="results" data-testid="results" className="mb-4 mx-16">
      <Businesses businesses={businesses} distanceType={distanceType} />
    </div>
  );
}
