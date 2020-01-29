import { Formik } from "formik";
import { Country } from "../../model/Country";
import { User } from "../../model/User";

import React, { ChangeEvent } from "react";
import { useFormik } from "formik";

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
      <label htmlFor="fullName">LULNAME </label>
      <input
        id="fullName"
        name="fullName"
        type="fullName"
        onChange={handleChange}
        value={fullName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={email}
      />
      <label htmlFor="country">country</label>
      <input
        id="country"
        name="country"
        type="country"
        onChange={handleChange}
        value={country}
      />
      <label htmlFor="age">age</label>
      <input
        id="age"
        name="age"
        type="age"
        onChange={handleChange}
        value={age}
      />
      <label htmlFor="gender">gender</label>
      <input
        id="gender"
        name="gender"
        type="gender"
        onChange={handleChange}
        value={gender}
      />
    </>
  );
};

export default PersonalInfoForm;
