import React, { ChangeEvent } from "react";

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
      <label htmlFor="answer">answer</label>
      <input
        id="answer"
        name="answer"
        type="answer"
        onChange={handleChange}
        value={answer}
      />
    </>
  );
};

export default SurveyForm;
