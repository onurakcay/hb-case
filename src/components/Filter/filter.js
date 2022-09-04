import React from "react";
import "./style.css";

export function Filter(props) {
  return (
    <div className="filterWrapper">
      <div className="filterItem">
        <div className="title">Renk</div>
        <div className="filterTextWrapper">
          <div className="filterText">Sarı (4)</div>
          <div className="filterText">Kırmızı (4)</div>
          <div className="filterText">Mavi (4)</div>
          <div className="filterText">Yeşil (4)</div>
        </div>
      </div>
      <div className="filterItem">
        <div className="title">Sıralama</div>
        <div className="filterTextWrapper">
          <div className="filterText">Sarı (4)</div>
          <div className="filterText">Kırmızı (4)</div>
          <div className="filterText">Mavi (4)</div>
          <div className="filterText">Yeşil (4)</div>
        </div>
      </div>
      <div className="filterItem">
        <div className="title">Marka</div>
        <div className="filterTextWrapper">
          <div className="filterText">Sarı (4)</div>
          <div className="filterText">Kırmızı (4)</div>
          <div className="filterText">Mavi (4)</div>
          <div className="filterText">Yeşil (4)</div>
        </div>
      </div>
    </div>
  );
}
