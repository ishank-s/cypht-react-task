import styled from "styled-components";

export const AppWrapper = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.body};
  overflow: hidden;
  padding: 5%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 4px;
  padding: 1.5em;
`;
