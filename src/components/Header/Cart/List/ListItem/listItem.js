import React from 'react';
import './style.css';

export function ListItem(props) {
  return (
    <div className="listItemWrapper">
      <div class="productImage">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/IPhone_13_Pro_vector.svg/237px-IPhone_13_Pro_vector.svg.png'/>
      </div>
      <div class="detailWrapper">
        <span class="title">iPhone 11 Kırmızı Kılıflı Garantili Telefon</span>
        <div class="removeButton">
          <button >Kaldır</button>
        </div>
      </div>
    </div>
  );
}
