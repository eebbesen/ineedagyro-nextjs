type LocationJson = {
  address1: string;
  city: string;
  [x: string]: string;
};

type BusinessJson = {
  alias: string;
  distance: number;
  location: LocationJson;
  name: string;
  url: string;
  [x: string]: string | number | array;
};

type DataJson = {
  businesses: BusinessJson[];
};

type Distance = "miles" | "kms";

type APISearchParams = {
  lat: number;
  lng: number;
  term: string;
};
