import React from 'react';
import HotelListItem from './hotelListItem.jsx'

const HotelList = ({ hotelList }) => (
  <div className="hotelList">
    { 
      hotelList
      .sort((a, b) => (a.name[0] < b.name[0]) ? -1 : (a.name[0] > b.name[0]) ? 1 : 0)
      .filter((set => hotel => !set.has(hotel.name) && set.add(hotel.name))(new Set))
      .map(hotel => (
        <HotelListItem hotel={ hotel } key={ hotel.name } />
      ))
    }
  </div>
);

export default HotelList;