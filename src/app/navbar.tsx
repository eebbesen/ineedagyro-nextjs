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
          <a href="#" onClick={clickHandler}>
            {`View in ${newDistanceType}`}
          </a>
        </ul>
      </nav>
    </header>
  );
}
