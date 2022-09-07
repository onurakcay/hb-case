import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { searchByOrder } from '../../features/products/productsSlice';
import { setFilter } from '../../features/filters/filterSlice';
export function SearchResultHeader(props) {
  const selectedFilter = useSelector(state => state.filter?.value);
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(searchByOrder({ query: event.target.value }));
    dispatch(setFilter({ query: event.target.value }));
  }
  return (
    <div className="searchResultHeaderWrapper">
      <div className="information">
        <div className="title">iPhone iOS cep telefonu</div>
        <div className="searchWordWrapper">
          <div className="label">Aranan Kelime:</div>
          <div className="value">iphone 11</div>
        </div>
      </div>
      <div className="orderFilterWrapper">
        <select value={selectedFilter} className="orderButton" onChange={handleChange}>
          <option>Sıralama</option>
          <option value="lower_price">En Düşük Fiyat</option>
          <option value="higher_price">En Yüksek Fiyat</option>
          <option value="asc">En Yeniler (A&gt;Z)</option>
          <option value="desc">En Yeniler (Z&gt;A)</option>
        </select>
      </div>
    </div>
  );
}
