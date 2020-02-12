import { FormikErrors } from "formik";
import { Form as FormValues } from "./model/Form";

export const validateForm = (values: FormValues) => {
  let errors: FormikErrors<FormValues> = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.fullName) {
    errors.fullName = "Required";
  }
  if (!values.age) {
    errors.age = "Required";
  }
  if (!values.country) {
    errors.country = "Required";
  }

  return errors;
};
