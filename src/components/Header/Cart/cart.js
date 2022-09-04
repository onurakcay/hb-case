import React from 'react';
import { List } from './List/list';
import './style.css';

export function Cart(props) {
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
        class="cartButton"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => {
          setTimeout(() => {
            setOver(false);
          }, 500);
        }}
      >
        Sepetim
        <div class="notification">4</div>
        <List showHideList={showHideList} />
      </button>
    </div>
  );
}
