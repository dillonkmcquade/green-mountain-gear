import React, { useState } from "react";
import "./signup.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = credentials;

  /* Checks for matching passwords, creates user using email and password and sets local state accordingly. Throws error to console if there is any */
  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2>Create a new account</h2>
      <span>Please provide your credentials below</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={displayName}
          label="name"
          required
        />
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="confirm password"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <Button type="submit">Create User</Button>
      </form>
    </div>
  );
};

export default SignUp;
