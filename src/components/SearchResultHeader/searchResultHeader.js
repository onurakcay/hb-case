import React from "react";
import "./style.css";

export function SearchResultHeader(props) {
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
        <select name="cars" id="cars" class="orderButton">
          <option selected>Sıralama</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
}
