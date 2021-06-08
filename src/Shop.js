import React, { useState, useEffect } from 'react';

const Shop = (props) => {
  const addToCart = ({ e, id } = {}) => {
    props.addToCart(id, 1);
  };

  const getCartLength = () => {
    if (props.cart.length && props.cart.length !== 1) {
      let reduce = props.cart.reduce((prev, curr) => prev.qty + curr.qty);
      return reduce;
    } else {
      // if length is 1 we can't use reduce, so we return the qty value, or 0 if array is empty.
      return props.cart.length ? props.cart[0].qty : 0;
    }
  };

  return (
    <div>
      <h1 className="section-title">Shop</h1>
      <div className="column-container">
        <div className="cart-count">Cart ({getCartLength()} items)</div>
        <div className="shop-items">
          {props.shopItems.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-img">
                <img src={item.img} alt="" />
              </div>
              <div className="card-title">{item.title}</div>
              <div className="card-desc">{item.description}</div>
              <div className="flex-bottom">
                <div className="card-price">${item.price}</div>
                <div className="card-btn">
                  <button onClick={() => addToCart({ id: item.id })}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
