import { NextPage } from "next";
import { Country } from "../model/Country";
import { fetchCountries } from "../network/client";
import PersonalInfoForm from "../components/PersonalInfoForm";
import SurveyForm from "../components/SurveyForm";
import SurveySummary from "../components/SurveySummary";
import ThemeChangeButton from "../components/ThemeChangeButton";
import { ThemeProvider } from "../hooks/useTheme";
import {
  AppWrapper,
  FormWrapper,
  StyledImage,
  StyledForm
} from "../styles/pages/indexStyles";
import GlobalStyles from "../styles/global";
import { useFormik } from "formik";
import { useState } from "react";
import { StyledButton } from "../components/MaterialInput";
const Home: NextPage<{ countries: Country[] }> = props => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      country: "",
      age: "",
      gender: "",
      answer: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: () => {}
  });
  const {
    handleChange,
    handleSubmit,
    values: { fullName, email, country, age, gender, answer }
  } = formik;

  const [step, setStep] = useState(0);
  const allSteps = [
    <PersonalInfoForm
      countryList={props.countries}
      handleChange={handleChange}
      fullName={fullName}
      email={email}
      country={country}
      age={age}
      gender={gender}
    />,
    <SurveyForm handleChange={handleChange} answer={answer} />,
    <SurveySummary
      fullName={fullName}
      email={email}
      country={country}
      age={age}
      gender={gender}
      answer={answer}
    />
  ];

  return (
    <ThemeProvider>
      <ThemeChangeButton />
      <GlobalStyles />
      <AppWrapper>
        <FormWrapper>
          <section>
            <h1>Survey Bot</h1>
            <StyledImage></StyledImage>
          </section>
          <StyledForm onSubmit={formik.handleSubmit}>
            {allSteps[step]}

            {step === allSteps.length - 1 && (
              <StyledButton type="submit">FINITO!</StyledButton>
            )}

            {step > 0 && (
              <StyledButton
                type="button"
                onClick={() => setStep(step => step - 1)}
              >
                BACK
              </StyledButton>
            )}
            {step < allSteps.length - 1 && (
              <StyledButton
                type="button"
                onClick={() => setStep(step => step + 1)}
              >
                NEXT
              </StyledButton>
            )}
          </StyledForm>
        </FormWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};

Home.getInitialProps = async ({ req }) => {
  const countries = await fetchCountries();
  return { countries };
};

export default Home;
