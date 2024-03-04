import React from "react";
import Loading from "./loading";
import Locations from "./locations";

export default function Results({
  locations,
}: {
  readonly locations: BusinessJson[];
}) {
  if (locations === undefined || locations.length < 1) {
    return (
      <div id="results" data-testid="results">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Locations locs={locations} />
    </div>
  );
}
