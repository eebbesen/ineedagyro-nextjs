export default function Location(props: Readonly<{
  alias: string;
  name: string;
  location: { address1: string };
  distance: number;
  url: string;
}>) {
  const { alias, name, location, distance, url } = props;

  return (
    <div className="location" key={alias} id={alias}>
      <a href={url}>
        <div className="location-name">{name}</div>
        <div className="location-address lefty">{location.address1}</div>
        <div className="location-distance righty">{`${distance.toFixed(2)} meters`}</div>
      </a>
    </div>
  );
}
