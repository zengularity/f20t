export type OfficeSearch = {
  count: number;
  data: ReadonlyArray<Office>;
};

export type Continent = {
  label: string
  key: string
}

export type Office = {
  name: string;
  description: string;
  employees_count: number;
  open_date: string;
  location: Location;
  remote_available: boolean;
  image_url: string;
};

export type Location = {
  city: string
  number: string
  address: string
  postal_code: string
  country: string
  language: string[]
  continent: Continent
}
