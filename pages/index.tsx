import { NextPage } from "next";
import { Country } from "../model/Country";
import { fetchCountries } from "../network/client";
import PersonalInfoForm from "../components/PersonalInfoForm";

const Home: NextPage<{ countries: Country[] }> = props => (
  <>
    <h1>Survey Bot</h1>
    <h3>Please fill out the personal details to proceed.</h3>

    <PersonalInfoForm />
  </>
);

Home.getInitialProps = async ({ req }) => {
  const countries = await fetchCountries();
  return { countries };
};
export default Home;
