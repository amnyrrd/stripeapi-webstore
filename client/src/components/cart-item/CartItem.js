import React from 'react';
import './CartItem.styles.scss';

const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' className='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x ${price}</span>
    </div>
  </div>
);

export default React.memo(CartItem);
