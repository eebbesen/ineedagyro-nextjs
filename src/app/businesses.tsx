import Location from "./business";

export default function Businesses({
  businesses,
}: {
  readonly businesses: ReadonlyArray<BusinessJson>;
}) {
  return (
    <div id="businesses" data-testid="businesses">
      <ul>
        {businesses.map((b: BusinessJson) => (
          <li key={b.alias}>
            <Location
              alias={b.alias}
              name={b.name}
              location={b.location}
              distance={b.distance}
              url={b.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
