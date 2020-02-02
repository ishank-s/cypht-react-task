import styled from "styled-components";

export const AppWrapper = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.body};
  overflow-x: hidden;
  padding: 5%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: ${props => props.theme.boxShadow};
  border: 1px solid ${props => props.theme.body};
  border-radius: 4px;
  padding: 2em;
  & > section {
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  justify-content: space-around;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: 20em;
  height: 20em;
  content: url(${props => props.theme.botIcon});
`;
