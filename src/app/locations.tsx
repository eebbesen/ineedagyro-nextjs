import Location from "./location";

export default function Locations ({ locs }: { readonly locs: ReadonlyArray<BusinessJson> }) {
  return (
    <div id="locations" data-testid="locations">
      <ul>
        {locs.map(
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
