import React, { ChangeEvent } from "react";
import { StyledInput } from "../MaterialInput";

type SurveyFormProps = {
  handleChange: (
    eventOrPath: string | ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | ChangeEvent<any>) => void);
  answer: string;
};

const SurveyForm: React.SFC<SurveyFormProps> = ({
  handleChange,
  answer
}: SurveyFormProps) => {
  return (
    <>
      <h1>Where are you from?</h1>
      <StyledInput
        id="answer"
        style={{ minHeight: "25vh" }}
        onChange={handleChange}
        value={answer}
      />
    </>
  );
};

export default SurveyForm;
