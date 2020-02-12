import { Formik } from "formik";
import { Country } from "../../model/Country";
import { Form } from "../../model/Form";

import React, { ChangeEvent } from "react";
import { useFormik } from "formik";

const SurveySummary: React.SFC<Form> = (props: Form) => {
  return (
    <>
      <h1>Response Summary</h1>
      {Object.keys(props).map((data: string) => (
        <h3>{(props as any)[data]}</h3>
      ))}
    </>
  );
};

export default SurveySummary;
