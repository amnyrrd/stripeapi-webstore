import React from 'react';
import Button from '../button/Button';
import './CartDropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;
