import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import App from './App';
import Shop from './Shop';
import Cart from './Cart';
import Corsair from './img/corsair-vengeance-rgb-pro.jpg';
import NvidiaGeforceRTX3080 from './img/nvidia-geforce-rtx-3080-ti.jpg';

const Routes = () => {
  // Set cart state with initial empty array
  const [cart, setCart] = useState([]);

  // Set shop items array with objects with id, image, title, description and price
  const shopItems = [
    {
      id: 0,
      img: NvidiaGeforceRTX3080,
      title: 'NVIDIA GEFORCE RTX 3080 Ti',
      description:
        'The GeForce RTX™ 3080 Ti delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.',
      price: 1199.99,
    },
    {
      id: 1,
      img: Corsair,
      title: 'CORSAIR - VENGEANCE RGB PRO 32GB',
      description:
        'CORSAIR VENGEANCE RGB PRO Series DDR4 memory lights up your PC with mesmerizing dynamic multi-zone RGB lighting, while delivering the best in DDR4 performance and stability. Every module boasts ten individually controlled RGB LEDs, while wire-free design makes installation simple. Take control with CORSAIR iCUE software and completely customize every module’s lighting to match your system, or easily synchronize lighting across all your CORSAIR products with Light LINK. A custom designed PCB provides the highest signal quality for the best level of performance and stability on the latest AMD and Intel DDR4 motherboards, while specially screened ICs unlock superior overclocking.',
      price: 224.99,
    },
  ];

  const addToCart = (id, qty) => {
    const newArray = cart.map((value) => {
      if (value.id === id) {
        return { ...value, qty: value.qty + qty };
      } else {
        return value;
      }
    });
    if (newArray.some(e => e.id === id)) {
      setCart(newArray);
    } else {
      setCart([...newArray, { id: id, qty: qty }]);
    }
    console.log(cart);
  };
  // function addToCart(id, qty)
  // Set cart state to current array plus new item with id

  // function removeFromCart(id)
  // Set cart state to current array but item deleted

  // function changeQty(id, qty)
  // Delete item, replace with same item but diff qty, place in same pos as old item
  const changeQty = (e, item) => {
    let diff = e.target.value - item.qty;
    console.log(diff);
    let newArray = cart
      .filter((value) => {
        if (value.id === item.id) {
          return value.qty + diff > 0;
        }
        return true;
      })
      .map((value) => {
        if (value.id === item.id) {
          return { ...value, qty: value.qty + diff };
        } else {
          return value;
        }
      });
    setCart(newArray);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Router path="/shop">
            <Shop shopItems={shopItems} addToCart={addToCart} cart={cart} />
          </Router>
          <Router path="/cart">
            <Cart cart={cart} shopItems={shopItems} changeQty={changeQty} />
          </Router>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
