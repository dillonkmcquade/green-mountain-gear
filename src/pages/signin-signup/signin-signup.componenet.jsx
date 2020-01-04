import React from "react";
import SignIn from "../../components/signin/signin.component.jsx";
import { SignInSignUpContainer } from "./signin-signup.styles";
import SignUp from "../../components/signup/signup.component";

const SignInSignUp = () => {
  return (
    <SignInSignUpContainer>
      <SignIn className="SignIn" />
      <SignUp className="SignUp" />
    </SignInSignUpContainer>
  );
};

export default SignInSignUp;
