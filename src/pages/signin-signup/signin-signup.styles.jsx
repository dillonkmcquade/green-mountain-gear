import styled from "styled-components";

export const SignInSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-bottom: 20px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100vw;
  }
`;
