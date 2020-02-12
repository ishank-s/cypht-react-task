import React from "react";
import { FormikErrors } from "formik";
import { Form as FormValues } from "../../model/Form";
import styled from "styled-components";

const StyledErrorMessage = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  border-radius: 4px;
  margin: 1.2rem;
  color: ${props => props.theme.body};
  border: 1px solid ${props => props.theme.highLight};
  background-color: ${props => props.theme.background};
  padding: 0.5em 1.5em;
`;
const ErrorMessage: React.SFC<{ errors: FormikErrors<FormValues> }> = ({
  errors
}: {
  errors: FormikErrors<FormValues>;
}) => {
  return (
    <StyledErrorMessage>
      <h5>Error!</h5>

      <p>{errors.fullName && `Full Name : ${errors.fullName}`}</p>
      <p>{errors.email && `Email : ${errors.email}`}</p>
      <p>{errors.age && `Age : ${errors.age}`}</p>
      <p>{errors.answer && `Answer : ${errors.answer}`}</p>
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
