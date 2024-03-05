import Business from "./business";

export default function Businesses({
  businesses,
}: {
  readonly businesses: ReadonlyArray<BusinessJson>;
}) {
  return (
    <div id="businesses" data-testid="businesses" className="grid gap-4">
      {businesses.map((b: BusinessJson) => (
        <div key={b.alias}>
          <Business
            alias={b.alias}
            name={b.name}
            location={b.location}
            distance={b.distance}
            url={b.url}
          />
        </div>
      ))}
    </div>
  );
}
