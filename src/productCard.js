import React from 'react';

export function ProductCard(props) {
  return (
    <div id="productCard" className="row">
      Product
      <div id="image">
        <img src={props.image} style={{ width: '150px' }} />
      </div>
      <div id="properties">
        <span id="title">Name :{props.title}</span>
        <br />
        <span id="price">Price :{props.price}</span>
      </div>
    </div>
  );
}
