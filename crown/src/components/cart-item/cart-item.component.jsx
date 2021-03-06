import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: {imageUrl, name, price, quantity}}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="Item" />
      <div className="item-details">
        <span>{name}</span>
        <span>{ quantity } X ${ price }</span>
      </div>
    </div>
  )
}

export default CartItem;