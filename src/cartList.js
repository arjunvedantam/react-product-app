import React, { useEffect, useState } from 'react';
import { CartCard } from './cartCard';
// import axios from 'axios';

export const CartList = (props) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts', null)
      .then((res) => res.json())
      .then((val) => {
        setCartList(val);
      })
      .catch((err) => {
        console.log(`error occured -> ${err}`);
      });
  }, []);

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  return (
    <div id="cartList">
      Cart List
      {cartList.map((cartItem) => {
        // console.log(cartItem);
        // <span> hide it up</span>
        return (
          <CartCard
            key={cartItem.id}
            id={cartItem.id}
            products={cartItem.products}
            {...props}
          />
        );
      })}
    </div>
  );
};
