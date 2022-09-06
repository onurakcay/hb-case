import React from 'react';
import './style.css';
import { addCart } from '../../../features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function calculateDiscountRatio(basePrice, ratio) {
  return (basePrice - (basePrice * ratio) / 100).toFixed(2);
}

function addCartHandler(product, dispatch) {
  dispatch(addCart({ product: product }));
}
function HoverHandler(props) {
  const cartList = useSelector(state => state.cart.value);
  const dispatch = useDispatch();
  let product = props.product;
  let isInCart = cartList.find(_cartItem => _cartItem.id === product.id) ? true : false;
  if (!props.state) {
    return (
      <div>
        <div className="attributes">
          {product.attributes.map(function (_product, index) {
            return (
              <div key={index} className="attribute">
                <span className="name">{_product.key}: </span>
                <span className="value">{_product.value}</span>
              </div>
            );
          })}
        </div>
        <div className="priceWrapper">
          <span className="price">
            {calculateDiscountRatio(product.price, product.discountRatio)} {product.unit}
          </span>
          <div className="discountWrapper">
            <span className="basePrice">
              {product.price.toFixed(2)} {product.unit}
            </span>
            <span className="discountRatio">{product.discountRatio}%</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={isInCart ? 'addToCartButton alreadyAdded' : 'addToCartButton'}
        onClick={() => !isInCart && addCartHandler(product, dispatch)}
      >
        {isInCart ? 'Bu ürünü sepete ekleyemezsiniz.' : 'Sepete Ekle'}
      </div>
    );
  }
}
export function ProductCard(props) {
  let [over, setOver] = React.useState(false);
  let isOver = false;
  if (over) {
    isOver = true;
  } else {
    isOver = false;
  }
  let product = props.product;
  return (
    <div
      className="productCardWrapper"
      onMouseOver={() => setOver(true)}
      onMouseOut={() => {
        setOver(false);
      }}
    >
      <div className="productFrame">
        <div className="productImageWrapper">
          <img src={product.image} />
        </div>
        <div className="productInfoWrapper">
          <div className="title">{product.name}</div>
          <HoverHandler state={isOver} product={product} />
        </div>
      </div>
    </div>
  );
}
