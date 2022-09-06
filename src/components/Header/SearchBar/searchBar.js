import React from 'react';
import './style.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { search } from '../../../features/products/productsSlice';
import { setFilter } from '../../../features/filters/filterSlice';
import { useDispatch } from 'react-redux';

export function SearchBar(props) {
  const dispatch = useDispatch();
  function handleChange(event) {
    let query = event.target.value;
    dispatch(search({ query: query }));
    dispatch(setFilter({ query: '' }));
  }
  return (
    <div className="searchWrapper">
      <AiOutlineSearch />
      <input placeholder="25 milyon ürün içinde ara" onChange={handleChange}></input>
    </div>
  );
}
