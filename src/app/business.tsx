export default function Business(props: Readonly<BusinessJson>) {
  const { alias, name, location, distance, url } = props;

  return (
    <div
      className="business bg-greek-blue hover:bg-white hover:text-greek-blue transition ease-in-out delay-175 rounded-lg py-2"
      key={alias}
      id={alias}
    >
      <a href={url} className="grid text-center">
        <div className="business-name text-6xl">{name}</div>
        <div className="business-data grid grid-cols-6">
          <div className="business-address col-span-2 col-start-1 text-right">
            {location.address1}
          </div>
          <div className="business-distance col-span-2 col-start-5 text-left">{`${distance.toFixed(2)} meters`}</div>
        </div>
      </a>
    </div>
  );
}
