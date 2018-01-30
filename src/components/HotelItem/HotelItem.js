import React from 'react'
import { Rating } from 'material-ui-rating'
import HotelItemButtons from '../HotelItemButtons/HotelItemButtons'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Price from '../Price/Price'

import './HotelItem.scss'

const HotelItem = (props) => (
  <Grid fluid>
    <Row style={{'font-family': 'Heebo, sans-serif', 'margin-bottom': '10px'}}>
      <Col xs={6} md={3}>
        <img src={props.image} />
      </Col>
      <Col xs={6} md={5} style={ { 'text-align': 'left' , 'border-right': '0.1px solid grey'} }>
        <Row>
          <Rating
            value={props.rate}
            max={5}
            onChange={(value) => console.log(`Rated with value ${value}`)} />
        </Row>
        <Row style={ { 'color': 'orange', 'font-weight': 'bold', 'padding-bottom': '5px' } }>
          {props.name.toUpperCase()}
        </Row>
        <Row style={{'font-size': '12px', 'color': 'grey', 'padding-bottom': '40px'}}>
          {props.description}
        </Row>
        <HotelItemButtons />
      </Col>
      <Col xs={6} md={2}>
        <Price price={props.price}/>
      </Col>
    </Row>
  </Grid>
)

export default HotelItem