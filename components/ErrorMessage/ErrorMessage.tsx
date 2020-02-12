import React from "react";
import { FormikErrors } from "formik";
import { Form as FormValues } from "../../model/Form";

const ErrorMessage: React.SFC<{ errors: FormikErrors<FormValues> }> = ({
  errors
}: {
  errors: FormikErrors<FormValues>;
}) => {
  return <>{errors.fullName}</>;
};

export default ErrorMessage;
