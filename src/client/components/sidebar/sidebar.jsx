import React from 'react';
import HotelList from './hotelList/hotelList.jsx';

const Sidebar = ({ hotelList, productImage }) => (
  <div className="sidebar">
    <div>
      <img src={ productImage.href } alt="venetian" style={{ height: `${ productImage.height }px`, width: `${ productImage.width }px`}} />
    </div>
    <HotelList hotelList={ hotelList } />
  </div>
);

export default Sidebar;