"use client";

export default function Navbar({
  distanceType,
  setDistanceType,
}: {
  distanceType: Distance;
  setDistanceType: Function;
}) {
  const newDistanceType = distanceType === "miles" ? "kms" : "miles";
  const clickHandler = () => {
    setDistanceType(newDistanceType);
  };

  return (
    <header className="text-right my-2 me-6">
      <nav>
        <ul>
          <li
            onClick={clickHandler}
            className="hover:cursor-pointer hover:text-gray-400 transition ease-in-out duration-1000"
          >
            {`View in ${newDistanceType}`}
          </li>
        </ul>
      </nav>
    </header>
  );
}
