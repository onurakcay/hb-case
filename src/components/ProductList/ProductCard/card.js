import React from 'react';
import './style.css';
function HoverHandler(props){
if(!props.state){
  return <div><div className='attributes'>
  <div className='attribute'>
    <span className='name'>Marka: </span>
    <span className='value'>Apple</span>
  </div>
  <div className='attribute'>
    <span className='name'>Renk: </span>
    <span className='value'>Siyah</span>
  </div>
</div>
<div className='priceWrapper'>
  <span className='price'>90,85 TL</span>
  <div className='discountWrapper'>
    <span className='basePrice'>124,00 TL</span>
    <span className='discountRatio'>12%</span>
  </div>
</div></div>
}else{
  return <div className='addToCartButton '>
    Sepete Ekle
  </div>
}
}
export function ProductCard(props) {
  let [over, setOver] = React.useState(false);
  let isOver = false;
  if (over) {
    isOver = true;
  } else {
    isOver = false;
  }
  return <div className="productCardWrapper" onMouseOver={() => setOver(true)}
  onMouseOut={() => {
    setOver(false);
  }}>
    <div className='productFrame'>
      <div className='productImageWrapper'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/IPhone_13_Pro_vector.svg/237px-IPhone_13_Pro_vector.svg.png'/>
      </div>
      <div className='productInfoWrapper'>
        <div className='title'>Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...</div>
        <HoverHandler state = {isOver}/>
      </div>
    </div>
  </div>;
}
