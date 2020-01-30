import styled from "styled-components";

export const AppWrapper = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.body};
  overflow: hidden;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
