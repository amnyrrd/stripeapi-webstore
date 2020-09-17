import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {clearCart} from '../../redux/cart/cart-actions'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HQMI8LTy6uC8l1aB9NQT5CMdqCItdJenTQJy9cVxNnOi4B1hE0yOv7i0Astr0wBafhqgsNEMmrLbqfs3QHrtSyS00qHUtW2fg';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((resp) => {
        alert('Payment successful!');
      })
      .then(() => clearCart)
      .catch((err) => {
        console.log('Payment error: ', JSON.parse(err));
        alert(
          'There was an issue with your payment. Please make sure to use the test provided credit card information.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Stripe Webstore Project'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
