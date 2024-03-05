"use client";

import { useState, useEffect } from "react";
import { getBusinesses } from "./getBusinesses";
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

  useEffect(() => {
    getLocation(setLat, setLng);
    async function populateLocs() {
      const data: BusinessJson[] = await getBusinesses(lat, lng);
      console.log(lat, lng);
      setBusinesses(data);
      console.log(data);
    }
    populateLocs();
  }, [lat, lng]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Results businesses={businesses} />
      </div>
    </main>
  );
}
