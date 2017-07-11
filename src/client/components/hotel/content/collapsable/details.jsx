import React from 'react';
import TextCollapse from './textCollapse.jsx';

const Details = ({ details }) => {
  return (
    <div>
      <TextCollapse name="DETAILS">
        { details.map(detail => (
          <div className="detail" key={ detail.value }>
            <div style={{ 'fontWeight': 'bold' }}>{ `${ detail.label }:` }</div>
            <div>{ detail.value }</div>
          </div>
          )) 
        }
      </TextCollapse>
    </div>
  );
}

export default Details;