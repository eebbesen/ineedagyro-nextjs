import Business from "./business";

export default function Businesses({
  businesses,
}: {
  readonly businesses: ReadonlyArray<BusinessJson>;
}) {
  if (businesses.length === 0) {
    return (
      <div
        id="businesses"
        data-testid="businesses"
        className="mt-8  text-6xl text-center"
      >
        No Businesses Found
      </div>
    );
  }

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
