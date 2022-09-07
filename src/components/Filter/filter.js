import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { searchByBrand, searchByColor, searchByOrder } from '../../features/products/productsSlice';
import { setFilter } from '../../features/filters/filterSlice';

export function Filter(props) {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(state => state.filter?.value);

  function handleClick(query, type) {
    if (query.toLowerCase() === selectedFilter) query = '';
    if (type === 'brand') dispatch(searchByBrand({ query: query }));
    if (type === 'color') dispatch(searchByColor({ query: query }));
    if (type === 'order') dispatch(searchByOrder({ query: query }));

    dispatch(setFilter({ query: query }));
  }

  function removeDuplicate(a) {
    const counts = [];
    a.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
    });
    let uniqueArray = a.filter(function (item, pos) {
      return a.indexOf(item) === pos;
    });
    console.log('uniqueArray', uniqueArray);
    uniqueArray = uniqueArray.map(_item => {
      return {
        name: _item,
        quantity: counts[_item] ?? 0
      };
    });

    return uniqueArray;
  }
  function prepareFilters(productData) {
    let brandArray = [];
    let colorArray = [];
    productData && productData.products.forEach(product => {
      product.attributes.forEach(_attribute => {
        if (_attribute.key === 'Marka') brandArray.push(_attribute.value);
        else if (_attribute.key === 'Renk') colorArray.push(_attribute.value);
      });
    });
    let returnValue = { attributes: { brands: removeDuplicate(brandArray), colors: removeDuplicate(colorArray) } };

    return returnValue.attributes;
  }
  let filtersData = prepareFilters(JSON.parse(localStorage.getItem('productData')));
  return (
    <div className="filterWrapper">
      <div className="filterItem">
        <div className="title">Renk</div>
        <div className="filterTextWrapper">
          {filtersData.colors.map((_color, index) => {
            return (
              <div
                key={index}
                className={`filterText ${selectedFilter === _color.name.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleClick(_color.name, 'color')}
              >
                {_color.name} ({_color.quantity})
              </div>
            );
          })}
        </div>
      </div>
      <div className="filterItem">
        <div className="title">Sıralama</div>
        <div className="filterTextWrapper">
          <div
            className={`filterText ${selectedFilter === 'lower_price' ? 'active' : ''}`}
            onClick={() => handleClick('lower_price', 'order')}
          >
            En Düşük Fiyat
          </div>
          <div
            className={`filterText ${selectedFilter === 'higher_price' ? 'active' : ''}`}
            onClick={() => handleClick('higher_price', 'order')}
          >
            En Yüksek Fiyat
          </div>
          <div
            className={`filterText ${selectedFilter === 'asc' ? 'active' : ''}`}
            onClick={() => handleClick('asc', 'order')}
          >
            En Yeniler (A&gt;Z)
          </div>
          <div
            className={`filterText ${selectedFilter === 'desc' ? 'active' : ''}`}
            onClick={() => handleClick('desc', 'order')}
          >
            En Yeniler (Z&gt;A)
          </div>
        </div>
      </div>
      <div className="filterItem">
        <div className="title">Marka</div>
        <div className="filterTextWrapper">
          {filtersData.brands.map((_brand, index) => {
            return (
              <div
                key={index}
                className={`filterText ${selectedFilter === _brand.name.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleClick(_brand.name, 'brand')}
              >
                {_brand.name} ({_brand.quantity})
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}