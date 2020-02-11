import styled from "styled-components";

const Input = props => {
  const { className, ...restProps } = props;
  return (
    <div className={className}>
      <input {...restProps} />
      <label>{props.displaytext || props.name}</label>
    </div>
  );
};

export const StyledInput = styled(Input)`
  position: relative;
  margin: 30px 0;

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  & > input {
    color: ${props => props.theme.body};
    width: 100%;
    box-shadow: none;
    padding: 10px 10px 10px 5px;
    font-size: 18px;

    background: none !important;
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
  /* Change Autocomplete styles in Chrome*/
  & > input:-webkit-autofill,
  & > input:-webkit-autofill:hover,
  & > input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.background} inset;
    -webkit-text-fill-color: ${props => props.theme.body};
  }
`;

export const StyledSelect = styled.select`
  border: none;
  background: none;
  color: ${props => props.theme.body};
  border-bottom: 1px solid ${props => props.theme.body};
  padding: 1em;
  padding-left: 0;
  margin: 1em 0;
  & > option {
    background: ${props => props.theme.background};
  }
  /* Change Autocomplete styles in Chrome*/
  & > select:-webkit-autofill,
  & > select:-webkit-autofill:hover,
  & > select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.background} inset;
    -webkit-text-fill-color: ${props => props.theme.body};
  }
`;

export const StyledButton = styled.button`
  padding: 1.2em;
  background: none;
  border: none;
  color: ${props => props.theme.body};
  border: 1px solid ${props => props.theme.body};
  &:hover {
    box-shadow: 7px 7px 0px 0px ${props => props.theme.body};
    top: -10px;
  }
  transition: 0.2s ease-out box-shadow;
  cursor: pointer;
`;
