import Location from "./location";

export function Locations ({ locs }: { locs: BusinessJson[] }) {
  const locations = [...locs]

  return (
    <div id="locations" data-testid="locations">
      <ul>
        {locations.map(
          (l: BusinessJson) => (
            <li key={l.alias}>
              <Location
                alias={l.alias}
                name={l.name}
                location={l.location}
                distance={l.distance}
                url={l.url}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};
