import { Country } from "../../model/Country";
import { User } from "../../model/User";

import React, { ChangeEvent } from "react";
import { useFormik, Field } from "formik";
import { StyledInput } from "../MaterialInput";

type PersonalInfoFormProps = User & {
  countryList: Country[];
  handleChange: (
    eventOrPath: string | ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | ChangeEvent<any>) => void);
};

const PersonalInfoForm: React.SFC<PersonalInfoFormProps> = ({
  countryList,
  handleChange,
  fullName,
  email,
  country,
  age,
  gender
}: PersonalInfoFormProps) => {
  return (
    <>
      Personal Info form
      <StyledInput
        id="fullName"
        name="fullName"
        onChange={handleChange}
        value={fullName}
      />
      <StyledInput
        id="email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <select
        id="country"
        name="country"
        onChange={handleChange}
        value={country}
      >
        {countryList.map(country => (
          <option key={country.alpha2Code} value={country.alpha2Code}>
            {country.name}
          </option>
        ))}
      </select>
      <StyledInput id="age" name="age" onChange={handleChange} value={age} />
      <StyledInput
        id="gender"
        name="gender"
        onChange={handleChange}
        value={gender}
      />
    </>
  );
};

export default PersonalInfoForm;
