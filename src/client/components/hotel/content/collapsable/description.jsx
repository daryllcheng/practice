import React from 'react';
import TextCollapse from './textCollapse.jsx';

const Description = ({ description }) => (
  <div>
    <TextCollapse name='DESCRIPTION'>
      { description.split('\r\n\r\n').map(paragraph =>
        <div style={{ 'margin': '15px' }} key={ paragraph }>
          { paragraph }
        </div>) 
      }
    </TextCollapse>
  </div>
);

export default Description;