import React, { Component } from 'react';
import axios from 'axios';
import Hotel from './hotel/hotel.jsx';
import Sidebar from './sidebar/sidebar.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
      name: '',
      code: '',
      starRating: 0,
      price: 0,
      phoneNumber: '',
      location: {},
      productImage: {},
      productMap: {},
      description: '',
      details: [],
      activeKey: 1
    }

    this.handleSelect = this.handleSelect.bind(this);
    this.getHotels = this.getHotels.bind(this);
    this.getTargetHotel = this.getTargetHotel.bind(this);
  }

  handleSelect(selectedTab) {
    this.setState({ 
      activeKey: selectedTab
    });
  }

  getHotels() {
    axios.get('http://localhost:3000/api/hotels/index.json')
    .then((data) => {
      this.setState({
        hotels: this.state.hotels.concat(data.data.list)
      });
    })
    .catch((err) => {
      console.log('Error in fetching hotel list: ', err);
    });
  }

  getTargetHotel() {
    axios.get('http://localhost:3000/api/hotels/venetian.json')
    .then((data) => {
      this.setState({
        name: data.data.name,
        code: data.data.code,
        starRating: data.data.starRating,
        price: data.data.price,
        phoneNumber: data.data.phoneNumber,
        location: Object.assign(this.state.location, data.data.location),
        productImage: Object.assign(this.state.productImage, data.data.media[0]),
        productMap: Object.assign(this.state.productMap, data.data.media[1]),
        description: data.data.description,
        details: this.state.details.concat(data.data.details)
      });
    })
    .catch((err) => {
      console.log('Error in fetching target hotel: ', err);
    });
  }

  componentWillMount() {
    this.getHotels();
    this.getTargetHotel();
  }

  render() {
    return (
      <Grid>
        <Row>
          <div className="seemore">
            <span className="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span> SEE ALL LAS VEGAS HOTELS
          </div>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 4 }>
            <Sidebar 
              hotelList={ this.state.hotels }
              productImage={ this.state.productImage }
            />
          </Col>
          <Col xs={ 12 } md={ 8 }>
            <Hotel 
              name={ this.state.name }
              code={ this.state.code }
              starRating={ this.state.starRating }
              price={ this.state.price }
              phoneNumber={ this.state.phoneNumber }
              location={ this.state.location }
              productMap={ this.state.productMap }
              description={ this.state.description }
              details={ this.state.details }
              handleSelect={ this.handleSelect }
              activeKey={ this.state.activeKey }
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;