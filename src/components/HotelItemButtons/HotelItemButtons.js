import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './HotelItemButtons.scss'

const style = {
  booking: {
    margin: 10,
    border: '1px solid orange',
    buttonStyle: {
      padding: '0px'
    }
  },
  price_history: {
    margin: 10,
    border: '1px solid green'
  }
};

const HotelItemButtons = () => (
  <Row start="xs">
    <Col xs={12}>
      <RaisedButton label="Book Now" style={style.booking} backgroundColor="white" labelColor="orange" />
      <RaisedButton label="Price History" style={style.price_history} backgroundColor="white" labelColor="green" />
    </Col>
  </Row>
)

export default HotelItemButtons