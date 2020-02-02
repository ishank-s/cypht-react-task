import styled from "styled-components";
import { restElement } from "babel-types";

const Input = props => {
  const { className, ...restProps } = props;
  return (
    <div className={className}>
      <input {...restProps} />
      <label>{props.name}</label>
    </div>
  );
};

export const StyledInput = styled(Input)`
  position: relative;
  margin: 45px 0;

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  & > input {
    color: ${props => props.theme.body};
    width: 80%;
    box-shadow: none;
    padding: 10px 10px 10px 5px;
    font-size: 18px;

    background: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.body};
  }
  & > input:focus {
    outline: none;
  }
  & > input:focus ~ label,
  & > input:valid ~ label {
    top: -20px;
    font-size: 14px;
  }
  & > label {
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
  }
`;
