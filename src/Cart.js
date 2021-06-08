import React, { useState, useEffect } from 'react';

const Cart = (props) => {
  const changeQty = ({ e, item }) => {
    props.changeQty(e, item);
  };

  const calculateSubtotal = () => {
    if (props.cart.length <= 0) {
      return '$0.00';
    } else if (props.cart.length === 1) {
      return (
        '$' +
        (props.shopItems[props.cart[0].id].price * props.cart[0].qty).toFixed(2)
      );
    }
    return props.cart.reduce((prev, curr) => {
      return `$${(
        props.shopItems[prev.id].price * prev.qty +
        props.shopItems[curr.id].price * curr.qty
      ).toFixed(2)}`;
    });
  };

  return (
    <div>
      <h1 className="section-title">Cart</h1>
      {props.cart.map((value) => (
        <div key={value.id}>
          {props.shopItems[value.id].title}
          <form>
            <input
              type="number"
              value={value.qty}
              onChange={(e) => {
                changeQty({ e, item: value });
              }}
            />
          </form>
        </div>
      ))}
      <div className="cart-count">Subtotal: {calculateSubtotal()}</div>
    </div>
  );
};

export default Cart;
