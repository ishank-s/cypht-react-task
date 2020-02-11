import { Formik } from "formik";
import { Country } from "../../model/Country";
import { User } from "../../model/User";
import { Survey } from "../../model/Survey";

import React, { ChangeEvent } from "react";
import { useFormik } from "formik";

type SummaryProps = User & Survey;

const SurveySummary: React.SFC<SummaryProps> = (props: SummaryProps) => {
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
