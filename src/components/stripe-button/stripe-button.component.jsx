import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_r7GWKnk03kJHyoYfhUSgatZ700KL8imw7L";

  const onToken = token => {
    console.log(token);
    alert("payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Green Mountain Gear"
      image="https://i.pinimg.com/originals/15/03/70/150370ee515891627897323c704c4b24.jpg"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
