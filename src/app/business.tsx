export default function Business(props: Readonly<BusinessJson>) {
  const { alias, name, location, distance, url } = props;

  return (
    <div className="business" key={alias} id={alias}>
      <a href={url}>
        <div className="business-name">{name}</div>
        <div className="business-address lefty">{location.address1}</div>
        <div className="business-distance righty">{`${distance.toFixed(2)} meters`}</div>
      </a>
    </div>
  );
}
