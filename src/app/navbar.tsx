"use client";

import { CogIcon } from "@heroicons/react/16/solid";

export default function Navbar({
  distanceType,
  setDistanceType,
}: {
  distanceType: Distance;
  setDistanceType: Function;
}) {
  const clickHandler = () => {
    const newDistanceType = distanceType === "miles" ? "kms" : "miles";
    setDistanceType(newDistanceType);
  };

  return (
    <header className="text-right justify-end grid my-2 me-6">
      <nav>
        <ul>
          <li>
            <CogIcon
              className="text-white hover:text-greek-blue h-6 w-6 transition ease-in-out delay-175"
              onClick={clickHandler}
            />
            {distanceType}
          </li>
        </ul>
      </nav>
    </header>
  );
}
