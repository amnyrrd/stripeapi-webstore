import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HQMI8LTy6uC8l1aB9NQT5CMdqCItdJenTQJy9cVxNnOi4B1hE0yOv7i0Astr0wBafhqgsNEMmrLbqfs3QHrtSyS00qHUtW2fg';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Stripe Webstore Project'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz/svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
