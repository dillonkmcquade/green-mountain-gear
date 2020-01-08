import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import UserIcon from "../sign-in-icon/sign-in-icon.component";
import CartDropDown from "../cart/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  NavigationContainer,
  TitleContainer,
  LogoContainer,
  ButtonsContainer
} from "./navigation.styles";


const Navigation = ({ currentUser, hidden }) => {
  
  return (
    <NavigationContainer>
      {/* LOGO  */}
      <LogoContainer>
        <TitleContainer className="hover-gray" to="/">
          <span>GREEN MOUNTAIN GEAR</span>
        </TitleContainer>
      </LogoContainer>

      {/*  OPTIONS */}
      <ButtonsContainer>
        <Link
          className="f5 fw4 hover-blue no-underline black dib-ns pv3 ph2"
          to="/shop"
        >
          Shop
        </Link>
        
        {currentUser ? (
          <Link
            to="/"
            className="f5 fw4 hover-blue no-underline black dib ml2 pv3 ph3"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </Link>
        ) : (
          <Link to="/signin">
            <UserIcon />
          </Link>
        )}
        <CartIcon />
        {hidden ? null : <CartDropDown />}
      </ButtonsContainer>
    </NavigationContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden
});

export default connect(mapStateToProps)(Navigation);
