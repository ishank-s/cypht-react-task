import { User } from "../model/User";
import fetch from "isomorphic-unfetch";
import { Country } from "../model/Country";

const baseRoot = "https://restcountries.eu/rest/v2";
const userCountriesURL = `${baseRoot}/all`;

export const fetchCountries = async (): Promise<Country[]> => {
  const res = await fetch(userCountriesURL);
  const data = await res.json();

  return data.map(
    ({ name, flag, alpha2Code }: Country) =>
      ({ name, flag, alpha2Code } as Country)
  );
};
