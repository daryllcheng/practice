import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Header = ({ name, starRating, price, phoneNumber, handleSelect }) => {
  
  let stars = () => { 
    let rating = [];
    for (let i = 1; i < starRating; i++) {
      rating.push(<span className="glyphicon glyphicon-star" aria-hidden="true" key={ i }></span>)
    };
    return rating;
  };

  return (
    <div className="header">
      <Col xs={ 12 } md={ 8 }>
        <Row>
          <span><span className="targetName">{ name.toUpperCase() } </span> { stars() }</span>
        </Row>
        <Row className="targetDetails">
          <span onClick={ () => handleSelect(3) }><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span> Strip</span>
          <span><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> { phoneNumber }</span>
          <span><span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Best Price Guarentee</span>
        </Row>
      </Col>
      <Col xs={ 6 } md={ 4 }>
        <div className="price">
          <Row className="targetPrice">{ `$${price}` }</Row>
          <Row>HOTEL ROOMS FROM</Row>
        </div>
      </Col>
    </div>
  );
}

export default Header;