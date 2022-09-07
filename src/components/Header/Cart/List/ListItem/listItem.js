import React from 'react';
import './style.css';
import { Modal } from '../../../../Modal/modal';

export function ListItem(props) {
  let product = props.product;
  let [show, setShow] = React.useState(false);

  return (
    <div className="listItemWrapper">
      <div className="productImage">
        <img src={product?.image} alt="product"/>
      </div>
      <div className="detailWrapper">
        <span className="title">{product?.name}</span>
        <div className="removeButton">
          <button onClick={() => setShow(true)}>Kaldır</button>
        </div>
      </div>
      {show && <Modal product={product} setShow={setShow} />}
    </div>
  );
}
