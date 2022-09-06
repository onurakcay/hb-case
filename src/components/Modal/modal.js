import React from 'react';
import './style.css';
import { removeCart } from '../../features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

export function Modal({ product, setShow }) {
  const dispatch = useDispatch();
  function removeItem() {
    dispatch(removeCart({ product: product }));
    setShow(false);
  }
  function cancel() {
    setShow(false);
  }

  return (
    <div>
      <div className="modalWrapper">
        <div className="modal-content">
          <div className="title">Ürünü silmek istediğinize emin misiniz?</div>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentiall....
          </div>
          <div className="actions">
            <button className="yes" onClick={removeItem}>
              Evet
            </button>
            <button className="no" onClick={cancel}>
              Hayır
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
