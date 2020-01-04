import React from "react";
import "./signup.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  /* Checks for matching passwords, creates user using email and password and sets local state accordingly. Throws error to console if there is any */
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
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

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>Create a new account</h2>
        <span>Please provide your credentials below</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            label="name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="confirm password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <Button type="submit">Create User</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
