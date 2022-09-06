import React from 'react';
import { ListItem } from './ListItem/listItem';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';

export function List(props) {
  const cartList = useSelector(state => state.cart.value);
  let showHideList = props.showHideList;

  let [over, setOver] = React.useState(showHideList);
  if (over) {
    showHideList = true;
  } else {
    if (props.showHideList) {
      setTimeout(() => {
        showHideList = false;
      }, 500);
    } else {
      showHideList = false;
    }
  }
  if (showHideList) {
    return (
      <div
        className="listWrapper"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => {
          setOver(false);
        }}
      >
        {cartList.map(_product => {
          return <ListItem key={_product.id} product={_product} />;
        })}
      </div>
    );
  }
}
