"use client";

import { useState, useEffect } from "react";
import { getBusinesses } from "./utils/getBusinesses";
import Navbar from "./navbar";
import Results from "./results";

function getLocation(setLat: Function, setLng: Function): void {
  navigator.geolocation.getCurrentPosition((p) => {
    setLat(p.coords.latitude);
    setLng(p.coords.longitude);
  });
}

export default function Home() {
  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);
  const [businesses, setBusinesses] = useState([] as BusinessJson[]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [distanceType, setDistanceType] = useState("miles" as Distance);

  useEffect(() => {
    getLocation(setLat, setLng);
    async function populateLocs() {
      if (Math.abs(lat) > 0 && Math.abs(lng) > 0) {
        const data: BusinessJson[] = await getBusinesses(lat, lng);
        setBusinesses(data);
        setIsLoaded(true);
      }
    }
    populateLocs();
  }, [lat, lng]);

  return (
    <div>
      <Navbar distanceType={distanceType} setDistanceType={setDistanceType} />
      <main>
        <div>
          <Results
            businesses={businesses}
            isLoaded={isLoaded}
            distanceType={distanceType}
          />
        </div>
      </main>
    </div>
  );
}
