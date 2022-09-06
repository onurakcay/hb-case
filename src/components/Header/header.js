import React from 'react';
import { Brand } from './Brand/brand';
import { Cart } from './Cart/cart';
import { SearchBar } from './SearchBar/searchBar';

import './style.css';

export function Header(props) {
  return (
    <div className="headerWrapper">
      <Brand />
      <SearchBar />
      <Cart />
    </div>
  );
}

function logo() {
  <span className="logo">hepsiburada</span>;
}
