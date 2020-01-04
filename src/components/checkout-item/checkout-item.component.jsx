import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItem,
  reduceQuantity,
  addItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItem, reduceQuantity, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="item-description">{name}</span>
      <span className="item-quantity">
        <div className="arrow" onClick={() => reduceQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="item-price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  reduceQuantity: item => dispatch(reduceQuantity(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
