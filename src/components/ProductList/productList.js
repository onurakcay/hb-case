import React from 'react';
import { ProductCard } from './ProductCard/card';
import './style.css';
import { useSelector } from 'react-redux';

export function ProductList(props) {
  const productsData = useSelector(state => state.products?.value.products);
  return (
    <div className="productListWrapper">
      {productsData && productsData.map(function (_product, index) {
        return <ProductCard key={_product.id} product={_product} />;
      })}
    </div>
  );
}
