import React, { useEffect, useState } from 'react';
import { ProductCard } from './productCard';
// import axios from 'axios';

export function ProductList(props) {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', null)
      .then((res) => res.json())
      .then((val) => {
        setProductsList(val);
        props.handleProductMap(val);
      })
      .catch((err) => {
        console.log(`error occured -> ${err}`);
      });
  }, []);

  return (
    <div id="productList">
      {productsList.map((product) => {
        console.log('product printed');
        return (
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
