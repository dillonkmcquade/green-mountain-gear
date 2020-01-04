import React from "react";
import Button from "../../button/button.component";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { toggleDropDown } from "../../../redux/cart/cart.actions";

import CartItem from "../../cart-item/cart-item.component";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <span className="cartEmpty">Shopping cart is empty.</span>
        ) : (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        )}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleDropDown());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
