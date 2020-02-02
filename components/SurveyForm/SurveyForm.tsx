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
      Where are you from?
      <StyledInput
        id="answer"
        name="answer"
        onChange={handleChange}
        value={answer}
      />
    </>
  );
};

export default SurveyForm;
