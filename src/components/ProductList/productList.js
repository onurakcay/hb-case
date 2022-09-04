import React from 'react';
import { ProductCard } from './ProductCard/card';
import './style.css';

export function ProductList(props) {
  return <div className="productListWrapper">
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
  </div>;
}
