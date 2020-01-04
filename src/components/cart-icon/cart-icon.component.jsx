import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart-black-shape.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleDropDown } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleDropDown, itemCount }) => (
  <div className="cart-icon" onClick={toggleDropDown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleDropDown: () => dispatch(toggleDropDown())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
