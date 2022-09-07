import React from 'react';
import { List } from './List/list';
import './style.css';
import { useSelector } from 'react-redux';
export function Cart(props) {
  const cartList = useSelector(state => state.cart?.value);
  let showHideList = false;
  let [over, setOver] = React.useState(false);
  if (over) {
    showHideList = true;
  } else {
    showHideList = false;
  }
  return (
    <div className="cartWrapper">
      <button
        className="cartButton"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => {
          setTimeout(() => {
            setOver(false);
          }, 500);
        }}
      >
        Sepetim
        <div className="notification">{cartList?.length}</div>
        {cartList?.length && <List showHideList={showHideList} />}
      </button>
    </div>
  );
}
