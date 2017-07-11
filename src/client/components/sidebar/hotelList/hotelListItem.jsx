import React from 'react';

const HotelListItem = ({ hotel }) => (
  <div className="hotelListItem">
    <div className="hotelName">{ hotel.name }</div>
    <div>{ `$${ hotel.price.toFixed(2) }` }</div>
  </div>
);

export default HotelListItem;