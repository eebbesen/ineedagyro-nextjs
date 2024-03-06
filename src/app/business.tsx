import { toMiles, toKms } from "./utils/convert";
import { displayAddress } from "./utils/businessHelper";

export default function Business({
  locJson,
  distanceType,
}: {
  locJson: Readonly<BusinessJson>;
  distanceType: Distance;
}) {
  const { alias, name, location, distance, url } = locJson;
  const displayDistance =
    distanceType === "miles" ? toMiles(distance) : toKms(distance);
  const address = displayAddress(distance, location);

  return (
    <div
      className="business bg-greek-blue hover:bg-white hover:text-greek-blue transition ease-in-out delay-175 rounded-lg py-2"
      key={alias}
      id={alias}
    >
      <a href={url} className="grid">
        <div className="business-name text-6xl text-center">{name}</div>
        <div className="business-data grid grid-cols-6">
          <div className="business-address col-span-2 col-start-1 text-right">
            {address}
          </div>
          <div className="business-distance col-span-2 col-start-5 text-left">{`${displayDistance} ${distanceType}`}</div>
        </div>
      </a>
    </div>
  );
}
