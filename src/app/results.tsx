import React from "react";
import Loading from "./loading";
import Businesses from "./businesses";

export default function Results({
  businesses,
}: {
  readonly businesses: BusinessJson[];
}) {
  if (businesses === undefined || businesses.length < 1) {
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
