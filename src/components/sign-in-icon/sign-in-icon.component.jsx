import React from "react";
import { ReactComponent as SignInIcon } from "../../assets/user.svg";
import "./sign-in-icon.styles.scss";

const UserIcon = () => {
  return (
    <div className="user-icon">
      <SignInIcon className="sign-in-icon" />
    </div>
  );
};

export default UserIcon;
