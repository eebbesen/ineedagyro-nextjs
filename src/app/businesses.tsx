import Business from "./business";

export default function Businesses({
  businesses,
  distanceType,
}: {
  readonly businesses: ReadonlyArray<BusinessJson>;
  readonly distanceType: Distance;
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
          <Business locJson={b} distanceType={distanceType} />
        </div>
      ))}
    </div>
  );
}
