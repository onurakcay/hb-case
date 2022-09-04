import React from 'react';
import './style.css';
import { AiOutlineSearch } from 'react-icons/ai'

export function SearchBar(props) {
  return <div class="searchWrapper"><AiOutlineSearch /><input placeholder='25 milyon ürün içinde ara'></input></div>;
}
