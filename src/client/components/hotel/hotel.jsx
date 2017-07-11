import React from 'react';
import Header from './header.jsx';
import Content from './content/content.jsx';
import { Row } from 'react-bootstrap';

const Hotel = (props) => (
  <div className="hotel">
    <Row>
      <Header 
        name={ props.name }
        starRating={ props.starRating }
        price={ props.price }
        phoneNumber={ props.phoneNumber }
        handleSelect={ props.handleSelect }
      />
    </Row>
    <Row>
      <Content 
        location={ props.location }
        productMap={ props.productMap }
        description={ props.description }
        details={ props.details }
        activeKey={ props.activeKey }
        handleSelect={ props.handleSelect }
      />
    </Row>
  </div>
);

export default Hotel;