import { Country } from "../../model/Country";
import { User } from "../../model/User";

import React, { ChangeEvent } from "react";
import { useFormik, Field } from "formik";
import { StyledInput, StyledSelect } from "../MaterialInput";

type PersonalInfoFormProps = User & {
  countryList: Country[];
  genderList: string[];
  handleChange: (
    eventOrPath: string | ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | ChangeEvent<any>) => void);
};

const PersonalInfoForm: React.SFC<PersonalInfoFormProps> = ({
  countryList,
  genderList,
  handleChange,
  fullName,
  email,
  country,
  age,
  gender
}: PersonalInfoFormProps) => {
  return (
    <>
      <StyledInput
        id="fullName"
        name="fullName"
        displaytext="Full Name"
        onChange={handleChange}
        value={fullName}
      />
      <StyledInput
        id="email"
        name="email"
        onChange={handleChange}
        displaytext="Email"
        value={email}
      />
      <label style={{ paddingLeft: "3px" }} htmlFor="country">
        Country
      </label>

      <StyledSelect
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
      </StyledSelect>
      <StyledInput
        id="age"
        displaytext="Age"
        name="age"
        onChange={handleChange}
        value={age}
      />
      <label style={{ paddingLeft: "3px" }} htmlFor="gender">
        Gender
      </label>
      <StyledSelect
        id="gender"
        name="gender"
        onChange={handleChange}
        value={gender}
      >
        {genderList.map(gender => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

export default PersonalInfoForm;
