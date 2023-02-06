import React from 'react';
//import axios from 'axios';

export const CartCard = (props) => {
  console.log(props);
  // console.log(props.id);
  return (
    <>
      Cart Card
      {props.products.length > 0 ? (
        <div id="cartCard">
          {props.products.map((product) => {
            // console.log(product);
            <div id="cartCard" className="row">
              <div id="image">
                {/* <img
                  src={props.productMap(product.id)}
                  style={{ width: '150px' }}
                /> */}
              </div>
              <div>
                <span>
                  {/* Name of the Product : {props.productMap(product.title)} */}
                </span>
                <span>Quantity : {product.quantity}</span>
                {/* <span>price : {props.productMap(product.price)}</span> */}
              </div>
            </div>;
          })}
        </div>
      ) : (
        <span> no products to show </span>
      )}
    </>
  );
};
