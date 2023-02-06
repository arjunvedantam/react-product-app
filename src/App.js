import React, { useState } from 'react';
import { ProductList } from './productList';
import { CartList } from './cartList';

export function App(props) {
  const productMap = new Map();
  const handleProductMap = (productList) => {
    productList.forEach((productObj) => {
      productMap.set(productObj.id, productObj);
    });
    return productMap;
  };
  return (
    <div id="layout">
      main layout
      <ProductList
        productMap={productMap}
        handleProductMap={handleProductMap}
      />
      <CartList productMap={productMap} />
    </div>
  );
}

// Log to console
console.log('Hello console');
