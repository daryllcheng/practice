import React from 'react';
import Description from './collapsable/description.jsx';
import Details from './collapsable/details.jsx';
import Location from './collapsable/location.jsx';
import { Tabs, Tab } from 'react-bootstrap';

const Content = (props) => (
  <Tabs id="contentTabs" activeKey={ props.activeKey } onSelect={ props.handleSelect } className="contentTabs">
    <Tab eventKey={ 1 } title="DESCRIPTION" className="descriptionTab">
      <Description description={ props.description } />
    </Tab>
    <Tab eventKey={ 2 } title="DETAILS" className="detailsTab">
      <Details details={ props.details } />
    </Tab>
    <Tab eventKey={ 3 } title="LOCATION" className="locationTab">
      <Location 
        location={ props.location } 
        productMap={ props.productMap }
      />
    </Tab>
  </Tabs>
);

export default Content;