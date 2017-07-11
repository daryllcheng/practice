import React from 'react';

const location = ({ location, productMap }) => (
  <div>
    <div style={{ margin: '15px' }}>
      <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span> { `${ location.address }, ${ location.city }, ${ location.state } ${ location.postalCode }` }
    </div>
    <img src={ productMap.href } alt="productMap" style={{ height: `${ productMap.height }px`, width: `${ productMap.width }px`}} /> 
  </div>
);

export default location;